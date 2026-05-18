import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET — detalhes de uma viagem pelo ID
// Usado pelo passageiro para polling do status (a cada 5s)
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

    const viagem = await prisma.viagem.findUnique({
      where: { id: viagemId },
      include: {
        passageiro: { select: { id: true, nome: true, email: true } },
        taxista: {
          select: {
            id: true,
            nome: true,
            apelido: true,
            lat: true,
            lng: true,
            moto: { select: { nomeMoto: true, matricula: true } },
          },
        },
      },
    });

    if (!viagem) {
      return NextResponse.json({ error: "Viagem não encontrada." }, { status: 404 });
    }

    return NextResponse.json({ ok: true, viagem });
  } catch {
    return NextResponse.json({ error: "Erro ao buscar viagem." }, { status: 500 });
  }
}