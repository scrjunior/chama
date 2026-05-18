import { NextResponse } from "next/server";

// Store de subscriptions dos PASSAGEIROS
declare global {
  // eslint-disable-next-line no-var
  var __pushSubsPassageiro: Map<string, any> | undefined;
}
const store = globalThis.__pushSubsPassageiro ?? new Map<string, any>();
globalThis.__pushSubsPassageiro = store;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { passageiroId, subscription } = body || {};

    if (!passageiroId || !subscription) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    store.set(String(passageiroId), subscription);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Falha ao salvar subscription" }, { status: 500 });
  }
}