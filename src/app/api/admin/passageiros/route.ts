import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const passageiros = await prisma.passageiro.findMany({
      orderBy: { criadoEm: "desc" },
    });

    return NextResponse.json({
      ok: true,
      passageiros: passageiros.map((p) => ({
        id: p.id,
        nome: p.nome,
        apelido: p.apelido,
        documento: p.documento,
        email: p.email,
        criadoEm: p.criadoEm,
      })),
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao listar passageiros no admin." },
      { status: 500 }
    );
  }
}