"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const GOOGLE_FONT =
  "https://fonts.googleapis.com/css2?family=Sora:wght@600;800&family=DM+Sans:wght@300;400;500&display=swap";

type TaxistaItem = {
  id: string;
  nome: string;
  apelido: string;
  disponivel?: boolean;
  lat?: number | null;
  lng?: number | null;
  moto: null | { nomeMoto: string; matricula: string };
};

type LatLng = {
  lat: number;
  lng: number;
};

type ViagemStatus = "PENDENTE" | "ACEITA" | "REJEITADA" | "CONCLUIDA" | "CANCELADA";

type ViagemAtiva = {
  id: string;
  status: ViagemStatus;
  origemTexto: string;
  destinoTexto: string;
  taxista?: {
    id: string;
    nome: string;
    apelido: string;
    lat?: number | null;
    lng?: number | null;
    moto?: { nomeMoto: string; matricula: string } | null;
  };
};

const TaxistasMap = dynamic(() => import("@/components/passageiro/TaxistasMap"), {
  ssr: false,
});

// Reutilizamos o mesmo ViagemAtivaMap do taxista (funciona para ambos)
const ViagemAtivaMap = dynamic(() => import("@/components/taxista/ViagemAtivaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] rounded-2xl border border-gray-800 bg-[#0f1117] flex items-center justify-center text-gray-500 text-sm">
      A carregar mapa…
    </div>
  ),
});

function formatCoord(n: number) {
  return n.toFixed(6);
}

function formatLocalTexto(lat: number, lng: number, label: string) {
  return `${label} (${formatCoord(lat)}, ${formatCoord(lng)})`;
}

function traduzirErroGeolocation(err: GeolocationPositionError) {
  switch (err.code) {
    case 1:
      return "Permissão de localização negada.";
    case 2:
      return "Não foi possível obter a localização do dispositivo.";
    case 3:
      return "A localização demorou demais para responder.";
    default:
      return err.message || "Erro desconhecido de localização.";
  }
}

// Extrai coordenadas do texto "Origem automática (lat, lng)"
function extrairCoords(texto: string): LatLng | null {
  const match = texto.match(/\((-?\d+\.\d+),\s*(-?\d+\.\d+)\)/);
  if (!match) return null;
  return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

export default function PassageiroHomePage() {
  const router = useRouter();

  const [passageiroNome, setPassageiroNome] = useState<string>("");
  const [taxistas, setTaxistas] = useState<TaxistaItem[]>([]);
  const [selectedTaxista, setSelectedTaxista] = useState<TaxistaItem | null>(null);

  const [origemTexto, setOrigemTexto] = useState("");
  const [destinoTexto, setDestinoTexto] = useState("");

  const [origemCoords, setOrigemCoords] = useState<LatLng | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<LatLng | null>(null);

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [loadingGps, setLoadingGps] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err" | "info"; text: string } | null>(null);

  // ── Viagem ativa (após solicitar) ──────────────────────────────
  const [viagemAtiva, setViagemAtiva] = useState<ViagemAtiva | null>(null);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Pagamento ────────────────────────────────────────────────────────────
  const [precoEstimado, setPrecoEstimado] = useState<number | null>(null);
  const [pagando, setPagando] = useState(false);
  const [viagemConcluida, setViagemConcluida] = useState<{ precoMt: number } | null>(null);

  const canSend = useMemo(() => {
    return !!selectedTaxista && !!origemCoords && !!destinoCoords;
  }, [selectedTaxista, origemCoords, destinoCoords]);

  // Coordenadas da viagem ativa (para o mapa)
  const viagemOrigemCoords = viagemAtiva ? extrairCoords(viagemAtiva.origemTexto) : null;
  const viagemDestinoCoords = viagemAtiva ? extrairCoords(viagemAtiva.destinoTexto) : null;
  const taxistaPos =
    viagemAtiva?.taxista?.lat && viagemAtiva?.taxista?.lng
      ? { lat: viagemAtiva.taxista.lat, lng: viagemAtiva.taxista.lng }
      : null;

  function logout() {
    localStorage.removeItem("passageiroId");
    router.push("/");
  }

  function atualizarOrigemPelaLocalizacao() {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      setMsg({ type: "err", text: "Este dispositivo não suporta localização." });
      return;
    }

    setLoadingGps(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setOrigemCoords({ lat, lng });
        setOrigemTexto(formatLocalTexto(lat, lng, "Origem automática"));
        setLoadingGps(false);
      },
      (err) => {
        setLoadingGps(false);
        setMsg({ type: "err", text: traduzirErroGeolocation(err) });
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 10000,
      }
    );
  }

  async function carregarDados(opts?: { silent?: boolean }) {
    const pid = localStorage.getItem("passageiroId");
    if (!pid) {
      router.push("/");
      return;
    }

    if (!opts?.silent) {
      setLoading(true);
      setMsg(null);
    }

    try {
      const [pRes, tRes] = await Promise.all([
        fetch(`/api/passageiros/${pid}`, { cache: "no-store" }),
        fetch(`/api/taxistas?disponivel=1`, { cache: "no-store" }),
      ]);

      const pData = await pRes.json().catch(() => null);
      const tData = await tRes.json().catch(() => null);

      if (pRes.ok) {
        setPassageiroNome(pData?.passageiro?.nome || "");
      }

      if (tRes.ok) {
        const list = (tData?.taxistas || []) as TaxistaItem[];
        setTaxistas(list);

        if (selectedTaxista) {
          const atualizado = list.find((x) => x.id === selectedTaxista.id);
          if (!atualizado) {
            setSelectedTaxista(null);
          } else {
            setSelectedTaxista(atualizado);
          }
        }
      } else {
        setTaxistas([]);
        setSelectedTaxista(null);
      }
    } catch {
      if (!opts?.silent) {
        setMsg({ type: "err", text: "Erro de rede ao carregar dados." });
      }
    } finally {
      if (!opts?.silent) {
        setLoading(false);
      }
    }
  }

  // ── Polling do status da viagem ativa ─────────────────────────
  async function verificarStatusViagem(viagemId: string) {
    try {
      const res = await fetch(`/api/viagens/${viagemId}`, { cache: "no-store" });
      if (!res.ok) return;

      const data = await res.json().catch(() => null);
      const viagem = data?.viagem;
      if (!viagem) return;

      setViagemAtiva((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          status: viagem.status,
          taxista: viagem.taxista ?? prev.taxista,
        };
      });

      if (viagem.status === "ACEITA") {
        setMsg({ type: "ok", text: "O taxista aceitou a sua viagem! 🚕 A aguardar chegada…" });
        fetchPrecoEstimado(viagemId);
      } else if (viagem.status === "REJEITADA") {
        setMsg({ type: "err", text: "O taxista rejeitou a viagem. Pode solicitar outro." });
        pararPolling();
        setViagemAtiva(null);
      } else if (viagem.status === "CONCLUIDA") {
        setMsg({ type: "ok", text: "Viagem concluída! ✅" });
        pararPolling();
        setViagemAtiva(null);
      } else if (viagem.status === "CANCELADA") {
        setMsg({ type: "err", text: "Viagem cancelada." });
        pararPolling();
        setViagemAtiva(null);
      }
    } catch {
      // ignorar erros silenciosos de polling
    }
  }

  function pararPolling() {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }

  // ── Buscar preço estimado assim que a viagem for ACEITA ────────
  async function fetchPrecoEstimado(viagemId: string) {
    try {
      const res = await fetch(`/api/viagens/${viagemId}/pagar`, { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json().catch(() => null);
      if (data?.precoMt) setPrecoEstimado(data.precoMt);
    } catch {}
  }

  // ── Passageiro paga e termina a viagem ─────────────────────────
  async function pagarETerminar() {
    if (!viagemAtiva) return;
    const passageiroId = localStorage.getItem("passageiroId");
    if (!passageiroId) return;

    setPagando(true);
    try {
      const res = await fetch(`/api/viagens/${viagemAtiva.id}/pagar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passageiroId }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setMsg({ type: "err", text: data?.error || "Falha ao processar pagamento." });
        return;
      }

      pararPolling();
      setViagemConcluida({ precoMt: data.precoMt });
      setViagemAtiva(null);
      setPrecoEstimado(null);
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao pagar." });
    } finally {
      setPagando(false);
    }
  }

  function iniciarPolling(viagemId: string) {
    pararPolling();
    // Verificar imediatamente e depois a cada 5 segundos
    verificarStatusViagem(viagemId);
    pollingRef.current = setInterval(() => {
      verificarStatusViagem(viagemId);
    }, 5000);
  }

  // Parar polling quando o componente desmonta
  useEffect(() => {
    return () => pararPolling();
  }, []);

  // Parar polling quando viagem termina (status final)
  useEffect(() => {
    if (!viagemAtiva) {
      pararPolling();
    }
  }, [viagemAtiva]);

  // ── Registo Push para passageiro ──────────────────────────────
  async function registrarPushParaPassageiro() {
    try {
      if (typeof window === "undefined") return;
      const passageiroId = localStorage.getItem("passageiroId");
      if (!passageiroId) return;
      const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!pub) return;
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;

      const reg = await navigator.serviceWorker.register("/sw.js");
      const perm = await Notification.requestPermission().catch(() => "default" as NotificationPermission);
      if (perm !== "granted") return;

      const existing = await reg.pushManager.getSubscription();
      const sub =
        existing ||
        (await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(pub),
        }));

      await fetch("/api/viagens/passageiro/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passageiroId, subscription: sub }),
      });
    } catch {}
  }

  useEffect(() => {
    const pid = localStorage.getItem("passageiroId");
    if (!pid) {
      router.push("/");
      return;
    }

    carregarDados();
    atualizarOrigemPelaLocalizacao();
    registrarPushParaPassageiro().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Só faz polling de taxistas quando não há viagem ativa
    if (viagemAtiva) return;

    const t = setInterval(() => {
      carregarDados({ silent: true });
    }, 15000);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTaxista?.id, viagemAtiva]);

  async function solicitarViagem() {
    setMsg(null);

    if (!selectedTaxista) {
      setMsg({ type: "err", text: "Selecione um taxista no mapa." });
      return;
    }

    if (!origemCoords) {
      setMsg({ type: "err", text: "Não foi possível obter a sua localização atual." });
      return;
    }

    if (!destinoCoords) {
      setMsg({ type: "err", text: "Selecione o destino no mapa." });
      return;
    }

    const passageiroId = localStorage.getItem("passageiroId");
    if (!passageiroId) {
      router.push("/");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/viagens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passageiroId,
          taxistaId: selectedTaxista.id,
          origemTexto,
          destinoTexto,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setMsg({ type: "err", text: data?.error || "Falha ao solicitar viagem." });
        return;
      }

      const novaViagem: ViagemAtiva = {
        id: data.viagem.id,
        status: "PENDENTE",
        origemTexto,
        destinoTexto,
        taxista: {
          id: selectedTaxista.id,
          nome: selectedTaxista.nome,
          apelido: selectedTaxista.apelido,
          lat: selectedTaxista.lat,
          lng: selectedTaxista.lng,
          moto: selectedTaxista.moto,
        },
      };

      setViagemAtiva(novaViagem);
      setMsg({ type: "info", text: "Viagem solicitada ✅ A aguardar confirmação do taxista…" });

      // Iniciar polling para acompanhar o status
      iniciarPolling(data.viagem.id);

      setDestinoCoords(null);
      setDestinoTexto("");
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao solicitar." });
    } finally {
      setSending(false);
    }
  }

  const msgColor = {
    ok: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    err: "bg-red-500/10 text-red-300 border-red-500/20",
    info: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  };

  return (
    <>
      <style>{`
        @import url('${GOOGLE_FONT}');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 0; }
      `}</style>

      <div className="min-h-dvh w-full font-body bg-[#0f1117] text-white">
        <header className="sticky top-0 z-10 border-b border-gray-800 bg-[#111318]/90 backdrop-blur">
          <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-lg">
                {passageiroNome ? `Olá, ${passageiroNome.split(" ")[0]}` : "Passageiro"}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {viagemAtiva
                  ? viagemAtiva.status === "ACEITA"
                    ? "🚕 Viagem em curso"
                    : "⏳ A aguardar taxista…"
                  : "Selecione um taxista e marque o destino no mapa"}
              </div>
            </div>

            <button
              onClick={logout}
              className="text-xs px-3 py-2 rounded-xl bg-[#1a1f2e] border border-gray-800 text-gray-200 hover:text-white hover:border-gray-700 transition-colors"
            >
              Sair
            </button>
          </div>
        </header>

        <main className="max-w-md mx-auto px-4 py-5 pb-10">
          {msg ? (
            <div
              className={`mb-4 rounded-xl px-4 py-3 text-sm border ${
                msgColor[msg.type]
              }`}
            >
              {msg.text}
            </div>
          ) : null}

          {/* ============================================ */}
          {/* ECRÃ DE VIAGEM ATIVA (passageiro)            */}
          {/* ============================================ */}
          {viagemAtiva ? (
            <section className={`rounded-2xl border p-4 ${
              viagemAtiva.status === "ACEITA"
                ? "border-yellow-500/20 bg-[#111318]"
                : "border-gray-800 bg-[#111318]"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className={`text-sm font-semibold ${
                    viagemAtiva.status === "ACEITA" ? "text-yellow-300" : "text-gray-200"
                  }`}>
                    {viagemAtiva.status === "ACEITA" ? "🚕 Viagem aceite!" : "⏳ Aguarda confirmação"}
                  </div>
                  {viagemAtiva.taxista && (
                    <div className="text-xs text-gray-400 mt-1">
                      Taxista: <span className="text-white">{viagemAtiva.taxista.nome} {viagemAtiva.taxista.apelido}</span>
                    </div>
                  )}
                </div>
                <span className={`text-[11px] rounded-full px-2 py-1 border ${
                  viagemAtiva.status === "ACEITA"
                    ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
                    : "bg-gray-500/10 text-gray-300 border-gray-500/20"
                }`}>
                  {viagemAtiva.status}
                </span>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="rounded-xl border border-gray-800 bg-[#0f1117] p-3">
                  <div className="text-xs text-gray-500 mb-1">📍 Origem</div>
                  <div className="text-gray-100">{viagemAtiva.origemTexto}</div>
                </div>
                <div className="rounded-xl border border-gray-800 bg-[#0f1117] p-3">
                  <div className="text-xs text-gray-500 mb-1">🏁 Destino</div>
                  <div className="text-gray-100">{viagemAtiva.destinoTexto}</div>
                </div>
              </div>

              {/* Mapa com percurso (visível quando ACEITA) */}
              {viagemAtiva.status === "ACEITA" && viagemOrigemCoords && viagemDestinoCoords ? (
                <div className="mb-4">
                  <ViagemAtivaMap
                    origemCoords={viagemOrigemCoords}
                    destinoCoords={viagemDestinoCoords}
                    taxistaPos={taxistaPos}
                    modo="passageiro"
                  />
                  <div className="mt-2 text-xs text-gray-500 text-center">
                    {taxistaPos
                      ? "🟡 Taxista a caminho · 🔵 Você · 🔴 Destino"
                      : "🔵 Você · 🔴 Destino · O taxista aparecerá quando partilhar localização"}
                  </div>
                </div>
              ) : viagemAtiva.status === "PENDENTE" ? (
                <div className="mb-4 rounded-xl border border-dashed border-yellow-700/40 bg-[#0f1117] p-3 text-xs text-yellow-500/70 text-center">
                  O mapa aparecerá assim que o taxista aceitar a viagem.
                </div>
              ) : null}

              {/* Botão cancelar enquanto PENDENTE */}
              {viagemAtiva.status === "PENDENTE" && (
                <button
                  onClick={() => {
                    pararPolling();
                    setViagemAtiva(null);
                    setMsg(null);
                  }}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-red-500/10 text-red-300 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                >
                  Cancelar pedido
                </button>
              )}

              {/* Botão Pagar e Terminar (visível quando ACEITA) */}
              {viagemAtiva.status === "ACEITA" && (
                <div className="mt-2">
                  {/* Preço estimado */}
                  {precoEstimado !== null && (
                    <div className="mb-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                      <div className="text-xs text-yellow-400/70 mb-1">Valor a pagar</div>
                      <div className="text-3xl font-bold text-yellow-300 font-display">
                        {precoEstimado.toLocaleString("pt-MZ")} MT
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">
                        Taxa base 15 MT + 5 MT/km · arredondado aos 5 MT
                      </div>
                    </div>
                  )}

                  <button
                    onClick={pagarETerminar}
                    disabled={pagando}
                    className={`w-full py-4 rounded-xl text-sm font-bold font-display transition-all shadow-lg ${
                      pagando
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white shadow-emerald-500/20"
                    }`}
                  >
                    {pagando
                      ? "A processar pagamento…"
                      : precoEstimado !== null
                        ? `💳 Pagar ${precoEstimado.toLocaleString("pt-MZ")} MT e Terminar`
                        : "💳 Pagar e Terminar viagem"}
                  </button>
                </div>
              )}
            </section>
          ) : viagemConcluida ? (
            /* ============================================ */
            /* ECRÃ DE CONCLUSÃO / RECIBO                  */
            /* ============================================ */
            <section className="rounded-2xl border border-emerald-500/20 bg-[#111318] p-6 text-center">
              <div className="text-5xl mb-3">✅</div>
              <div className="font-display font-bold text-xl text-emerald-300 mb-1">
                Viagem concluída!
              </div>
              <div className="text-sm text-gray-400 mb-6">
                Obrigado por usar o Chama-Moto
              </div>

              {/* Recibo */}
              <div className="rounded-xl border border-gray-800 bg-[#0f1117] p-4 mb-6 text-left space-y-3">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Recibo</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxa base</span>
                  <span className="text-gray-100">15 MT</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Distância</span>
                  <span className="text-gray-100">{viagemConcluida.precoMt - 15} MT</span>
                </div>
                <div className="border-t border-gray-800 pt-3 flex justify-between">
                  <span className="text-gray-100 font-semibold">Total pago</span>
                  <span className="text-yellow-300 font-bold text-lg font-display">
                    {viagemConcluida.precoMt.toLocaleString("pt-MZ")} MT
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setViagemConcluida(null);
                  setMsg(null);
                  setSelectedTaxista(null);
                  setDestinoCoords(null);
                  setDestinoTexto("");
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold bg-[#1a1f2e] border border-gray-700 text-gray-200 hover:border-gray-600 transition-colors"
              >
                Nova viagem
              </button>
            </section>
          ) : (
            /* ============================================ */
            /* FORMULÁRIO DE NOVA VIAGEM                   */
            /* ============================================ */
            <section className="rounded-2xl border border-gray-800 bg-[#111318] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Nova Viagem</div>
                  <div className="text-xs text-gray-500 mt-1">
                    A origem é automática e o destino é escolhido no mapa.
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => carregarDados()}
                    className="text-xs px-3 py-2 rounded-xl bg-[#1a1f2e] border border-gray-800 text-gray-200 hover:border-gray-700 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "A carregar..." : "Atualizar"}
                  </button>

                  <button
                    onClick={atualizarOrigemPelaLocalizacao}
                    className="text-xs px-3 py-2 rounded-xl bg-[#1a1f2e] border border-gray-800 text-gray-200 hover:border-gray-700 transition-colors"
                    disabled={loadingGps}
                  >
                    {loadingGps ? "GPS..." : "Atualizar origem"}
                  </button>
                </div>
              </div>

              <div className="mt-4">
                {loading ? (
                  <div className="text-sm text-gray-300">A carregar mapa…</div>
                ) : taxistas.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-gray-700 bg-[#0f1117] p-4">
                    <div className="text-sm font-semibold text-gray-200">Nenhum taxista disponível</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Quando um taxista clicar "Ficar disponível", ele aparecerá aqui.
                    </div>
                  </div>
                ) : (
                  <TaxistasMap
                    taxistas={taxistas}
                    selectedId={selectedTaxista?.id || ""}
                    passengerPos={origemCoords}
                    destinationPos={destinoCoords}
                    onSelect={(t: TaxistaItem) => {
                      setSelectedTaxista(t);
                      setMsg(null);
                    }}
                    onPickDestination={(coords: LatLng) => {
                      setDestinoCoords(coords);
                      setDestinoTexto(formatLocalTexto(coords.lat, coords.lng, "Destino selecionado"));
                      setMsg(null);
                    }}
                  />
                )}
              </div>

              <div className="mt-4">
                {!selectedTaxista ? (
                  <div className="rounded-xl border border-dashed border-gray-700 bg-[#0f1117] p-4">
                    <div className="text-sm font-semibold text-gray-200">Nenhum taxista selecionado</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Clique num marcador verde/amarelo para selecionar um taxista.
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-gray-800 bg-[#0f1117] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-100">
                          {selectedTaxista.nome} {selectedTaxista.apelido}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {selectedTaxista.moto
                            ? `${selectedTaxista.moto.nomeMoto} • ${selectedTaxista.moto.matricula}`
                            : "Sem moto"}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {selectedTaxista.lat != null && selectedTaxista.lng != null
                            ? `Lat: ${selectedTaxista.lat} • Lng: ${selectedTaxista.lng}`
                            : "Sem coordenadas ainda"}
                        </div>
                      </div>

                      <span className="text-[11px] text-gray-400 border border-gray-800 rounded-full px-2 py-1">
                        Selecionado
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col gap-3">
                      <div className="rounded-xl border border-gray-800 bg-[#111318] p-3">
                        <div className="text-xs text-gray-500">Origem automática</div>
                        <div className="text-sm text-gray-100 mt-1">
                          {origemTexto || "A obter localização atual..."}
                        </div>
                      </div>

                      <div className="rounded-xl border border-gray-800 bg-[#111318] p-3">
                        <div className="text-xs text-gray-500">Destino selecionado no mapa</div>
                        <div className="text-sm text-gray-100 mt-1">
                          {destinoTexto || "Clique no mapa para marcar o destino"}
                        </div>
                      </div>

                      <div className="text-xs text-gray-500">
                        Dica: primeiro selecione o taxista, depois clique no mapa no ponto do destino.
                      </div>

                      <button
                        onClick={solicitarViagem}
                        disabled={sending || !canSend}
                        className={`mt-1 w-full font-display font-bold py-4 rounded-xl transition-all shadow-lg ${
                          sending || !canSend
                            ? "bg-gray-700 text-gray-300 cursor-not-allowed shadow-none"
                            : "bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-gray-900 shadow-yellow-400/20"
                        }`}
                      >
                        {sending ? "A solicitar..." : "Solicitar viagem"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}