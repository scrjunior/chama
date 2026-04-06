import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const nome = String(body?.nome ?? "").trim();
    const apelido = String(body?.apelido ?? "").trim();
    const documento = String(body?.documento ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const senha = String(body?.senha ?? "").trim();

    if (
      nome.length < 2 ||
      apelido.length < 2 ||
      documento.length < 3 ||
      email.length < 4 ||
      senha.length < 4
    ) {
      return NextResponse.json({ error: "Campos inválidos." }, { status: 400 });
    }

    const created = await prisma.passageiro.create({
      data: {
        nome,
        apelido,
        documento,
        email,
        senha,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        passageiro: {
          id: created.id,
          nome: created.nome,
          apelido: created.apelido,
          documento: created.documento,
          email: created.email,
          criadoEm: created.criadoEm,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("ERRO AO CADASTRAR PASSAGEIRO:", error);

    if (error?.code === "P2002") {
      const target = Array.isArray(error?.meta?.target)
        ? error.meta.target.join(", ")
        : "";

      if (target.includes("documento")) {
        return NextResponse.json(
          { error: "Já existe um passageiro com este documento." },
          { status: 409 }
        );
      }

      if (target.includes("email")) {
        return NextResponse.json(
          { error: "Já existe um passageiro com este e-mail." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "Já existe um registo com estes dados." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "Não foi possível cadastrar passageiro.",
        detalhe: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}