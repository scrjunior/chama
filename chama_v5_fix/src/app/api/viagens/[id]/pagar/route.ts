import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ── Cálculo de preço ─────────────────────────────────────────────
// Taxa base:  15 MT
// Por km:      5 MT/km  (fórmula Haversine)
// Mínimo:     20 MT
// Arredondado aos 5 MT mais próximos

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calcularPreco(origemTexto: string, destinoTexto: string): number {
  const match1 = origemTexto.match(/\((-?\d+\.?\d*),\s*(-?\d+\.?\d*)\)/);
  const match2 = destinoTexto.match(/\((-?\d+\.?\d*),\s*(-?\d+\.?\d*)\)/);

  const TAXA_BASE = 15;
  const POR_KM    = 5;
  const MINIMO    = 20;

  if (!match1 || !match2) return MINIMO;

  const km = haversineKm(
    parseFloat(match1[1]), parseFloat(match1[2]),
    parseFloat(match2[1]), parseFloat(match2[2])
  );

  const raw = TAXA_BASE + km * POR_KM;
  const arredondado = Math.round(raw / 5) * 5; // arredondar aos 5 MT
  return Math.max(arredondado, MINIMO);
}

// POST — passageiro paga e conclui a viagem
export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const viagemId = String(id ?? "").trim();

    const body = await req.json().catch(() => ({}));
    const passageiroId = String(body?.passageiroId ?? "").trim();

    if (!viagemId || !passageiroId) {
      return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    }

    const viagem = await prisma.viagem.findUnique({
      where: { id: viagemId },
      include: {
        taxista: { select: { id: true, nome: true, apelido: true } },
        passageiro: { select: { id: true } },
      },
    });

    if (!viagem) {
      return NextResponse.json({ error: "Viagem não encontrada." }, { status: 404 });
    }
    if (viagem.passageiroId !== passageiroId) {
      return NextResponse.json({ error: "Sem permissão." }, { status: 403 });
    }
    if (viagem.status !== "ACEITA") {
      return NextResponse.json(
        { error: `Viagem em estado ${viagem.status}, não pode ser paga agora.` },
        { status: 409 }
      );
    }

    const precoMt = calcularPreco(viagem.origemTexto, viagem.destinoTexto);

    const updated = await prisma.viagem.update({
      where: { id: viagemId },
      data: { status: "CONCLUIDA", precoMt },
      include: {
        taxista: { select: { id: true, nome: true, apelido: true } },
      },
    });

    return NextResponse.json({ ok: true, viagem: updated, precoMt });
  } catch {
    return NextResponse.json({ error: "Erro ao processar pagamento." }, { status: 500 });
  }
}

// GET — calcular preço estimado sem concluir (para mostrar ao passageiro)
export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const viagemId = String(id ?? "").trim();

    if (!viagemId) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    const viagem = await prisma.viagem.findUnique({ where: { id: viagemId } });
    if (!viagem) {
      return NextResponse.json({ error: "Viagem não encontrada." }, { status: 404 });
    }

    const precoMt = calcularPreco(viagem.origemTexto, viagem.destinoTexto);
    return NextResponse.json({ ok: true, precoMt });
  } catch {
    return NextResponse.json({ error: "Erro ao calcular preço." }, { status: 500 });
  }
}
