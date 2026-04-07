import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const taxistas = await prisma.taxista.findMany({
      orderBy: { criadoEm: "desc" },
      include: { moto: true },
    });

    return NextResponse.json({
      ok: true,
      taxistas: taxistas.map((t) => ({
        id: t.id,
        nome: t.nome,
        apelido: t.apelido,
        documento: t.documento,
        email: t.email,
        disponivel: t.disponivel,
        criadoEm: t.criadoEm,
        moto: t.moto
          ? {
              id: t.moto.id,
              nomeMoto: t.moto.nomeMoto,
              matricula: t.moto.matricula,
            }
          : null,
      })),
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao listar taxistas no admin." },
      { status: 500 }
    );
  }
}