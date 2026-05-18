import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import webpush from "web-push";

// ===== STORE COMPARTILHADA (taxistas e passageiros) =====
declare global {
  // eslint-disable-next-line no-var
  var __pushSubs: Map<string, any> | undefined;
  // eslint-disable-next-line no-var
  var __pushSubsPassageiro: Map<string, any> | undefined;
}

const storeTaxistas = globalThis.__pushSubs ?? new Map<string, any>();
globalThis.__pushSubs = storeTaxistas;

const storePassageiros = globalThis.__pushSubsPassageiro ?? new Map<string, any>();
globalThis.__pushSubsPassageiro = storePassageiros;

if (
  process.env.VAPID_PUBLIC_KEY &&
  process.env.VAPID_PRIVATE_KEY &&
  process.env.VAPID_SUBJECT
) {
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT,
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

// PATCH — atualizar status da viagem (ACEITA, REJEITADA, CONCLUIDA, CANCELADA)
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const viagemId = String(id ?? "").trim();

    const body = await req.json();
    const taxistaId = String(body?.taxistaId ?? "").trim();
    const novoStatus = String(body?.status ?? "").trim() as
      | "ACEITA"
      | "REJEITADA"
      | "CONCLUIDA"
      | "CANCELADA";

    if (!viagemId || !taxistaId) {
      return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    }

    const statusValidos = ["ACEITA", "REJEITADA", "CONCLUIDA", "CANCELADA"];
    if (!statusValidos.includes(novoStatus)) {
      return NextResponse.json({ error: "Status inválido." }, { status: 400 });
    }

    const viagem = await prisma.viagem.findUnique({
      where: { id: viagemId },
      include: {
        passageiro: { select: { id: true, nome: true } },
        taxista: {
          select: {
            id: true,
            nome: true,
            apelido: true,
            lat: true,
            lng: true,
          },
        },
      },
    });

    if (!viagem) {
      return NextResponse.json({ error: "Viagem não encontrada." }, { status: 404 });
    }

    if (viagem.taxistaId !== taxistaId) {
      return NextResponse.json({ error: "Sem permissão." }, { status: 403 });
    }

    if (viagem.status !== "PENDENTE" && viagem.status !== "ACEITA") {
      return NextResponse.json(
        { error: `Viagem já está ${viagem.status}.` },
        { status: 409 }
      );
    }

    const updated = await prisma.viagem.update({
      where: { id: viagemId },
      data: { status: novoStatus },
      include: {
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
        passageiro: { select: { id: true, nome: true } },
      },
    });

    // =============================================
    // 🔔 NOTIFICAR O PASSAGEIRO (ACEITA ou REJEITADA)
    // =============================================
    const passageiroId = viagem.passageiroId;
    const subPassageiro = storePassageiros.get(passageiroId);

    if (subPassageiro) {
      let title = "";
      let bodyMsg = "";

      if (novoStatus === "ACEITA") {
        title = "Viagem aceite! 🚕";
        bodyMsg = `${viagem.taxista.nome} aceitou a sua viagem. Aguarde a chegada.`;
      } else if (novoStatus === "REJEITADA") {
        title = "Viagem rejeitada ❌";
        bodyMsg = `${viagem.taxista.nome} não está disponível. Por favor escolha outro taxista.`;
      } else if (novoStatus === "CONCLUIDA") {
        title = "Viagem concluída ✅";
        bodyMsg = "A sua viagem foi concluída com sucesso.";
      }

      if (title) {
        const payload = {
          title,
          body: bodyMsg,
          url: "/passageiro/home",
          viagemId,
          novoStatus,
        };

        try {
          await webpush.sendNotification(subPassageiro, JSON.stringify(payload));
        } catch (e: any) {
          if (e?.statusCode === 404 || e?.statusCode === 410) {
            storePassageiros.delete(passageiroId);
          }
        }
      }
    }

    return NextResponse.json({ ok: true, viagem: updated });
  } catch {
    return NextResponse.json({ error: "Erro ao atualizar status." }, { status: 500 });
  }
}