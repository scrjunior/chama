import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [passageiros, taxistas, viagens] = await Promise.all([
      prisma.passageiro.count(),
      prisma.taxista.count(),
      prisma.viagem.count({
        where: { status: "CONCLUIDA" },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      stats: {
        passageiros,
        taxistas,
        viagens,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar estatísticas do admin." },
      { status: 500 }
    );
  }
}