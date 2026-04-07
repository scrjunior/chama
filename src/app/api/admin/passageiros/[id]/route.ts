import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const passageiroId = String(id ?? "").trim();

    if (!passageiroId) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    const body = await req.json().catch(() => ({}));

    const nome = String(body?.nome ?? "").trim();
    const apelido = String(body?.apelido ?? "").trim();
    const documento = String(body?.documento ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const senha = String(body?.senha ?? "").trim();

    if (
      nome.length < 2 ||
      apelido.length < 2 ||
      documento.length < 3 ||
      email.length < 4
    ) {
      return NextResponse.json({ error: "Campos inválidos." }, { status: 400 });
    }

    const updated = await prisma.passageiro.update({
      where: { id: passageiroId },
      data: {
        nome,
        apelido,
        documento,
        email,
        ...(senha ? { senha } : {}),
      },
    });

    return NextResponse.json({
      ok: true,
      passageiro: {
        id: updated.id,
        nome: updated.nome,
        apelido: updated.apelido,
        documento: updated.documento,
        email: updated.email,
        criadoEm: updated.criadoEm,
      },
    });
  } catch (error: any) {
    if (error?.code === "P2002") {
      return NextResponse.json(
        { error: "Documento ou email já existe." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao atualizar passageiro." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const passageiroId = String(id ?? "").trim();

    if (!passageiroId) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    await prisma.$transaction([
      prisma.viagem.deleteMany({
        where: { passageiroId },
      }),
      prisma.passageiro.delete({
        where: { id: passageiroId },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao apagar passageiro." },
      { status: 500 }
    );
  }
}