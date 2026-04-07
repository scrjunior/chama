import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const taxistaId = String(id ?? "").trim();

    if (!taxistaId) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    const body = await req.json().catch(() => ({}));

    const nome = String(body?.nome ?? "").trim();
    const apelido = String(body?.apelido ?? "").trim();
    const documento = String(body?.documento ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const senha = String(body?.senha ?? "").trim();
    const disponivel = Boolean(body?.disponivel);

    const nomeMoto = String(body?.moto?.nomeMoto ?? "").trim();
    const matricula = String(body?.moto?.matricula ?? "").trim();

    if (
      nome.length < 2 ||
      apelido.length < 2 ||
      documento.length < 3 ||
      email.length < 4 ||
      nomeMoto.length < 2 ||
      matricula.length < 3
    ) {
      return NextResponse.json({ error: "Campos inválidos." }, { status: 400 });
    }

    const taxistaExistente = await prisma.taxista.findUnique({
      where: { id: taxistaId },
      include: { moto: true },
    });

    if (!taxistaExistente) {
      return NextResponse.json(
        { error: "Taxista não encontrado." },
        { status: 404 }
      );
    }

    const updated = await prisma.taxista.update({
      where: { id: taxistaId },
      data: {
        nome,
        apelido,
        documento,
        email,
        disponivel,
        ...(senha ? { senha } : {}),
        moto: taxistaExistente.moto
          ? {
              update: {
                nomeMoto,
                matricula,
              },
            }
          : {
              create: {
                nomeMoto,
                matricula,
              },
            },
      },
      include: { moto: true },
    });

    return NextResponse.json({
      ok: true,
      taxista: {
        id: updated.id,
        nome: updated.nome,
        apelido: updated.apelido,
        documento: updated.documento,
        email: updated.email,
        disponivel: updated.disponivel,
        criadoEm: updated.criadoEm,
        moto: updated.moto
          ? {
              id: updated.moto.id,
              nomeMoto: updated.moto.nomeMoto,
              matricula: updated.moto.matricula,
            }
          : null,
      },
    });
  } catch (error: any) {
    if (error?.code === "P2002") {
      return NextResponse.json(
        { error: "Documento, email ou matrícula já existe." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao atualizar taxista." },
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
    const taxistaId = String(id ?? "").trim();

    if (!taxistaId) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    await prisma.$transaction(async (tx) => {
      const taxista = await tx.taxista.findUnique({
        where: { id: taxistaId },
        include: { moto: true },
      });

      if (!taxista) {
        throw new Error("NOT_FOUND");
      }

      await tx.viagem.deleteMany({
        where: { taxistaId },
      });

      if (taxista.moto) {
        await tx.moto.delete({
          where: { id: taxista.moto.id },
        });
      }

      await tx.taxista.delete({
        where: { id: taxistaId },
      });
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    if (error?.message === "NOT_FOUND") {
      return NextResponse.json(
        { error: "Taxista não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao apagar taxista." },
      { status: 500 }
    );
  }
}