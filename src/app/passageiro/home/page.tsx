"use client";
import { useEffect, useMemo, useState } from "react";
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

const TaxistasMap = dynamic(() => import("@/components/passageiro/TaxistasMap"), {
  ssr: false,
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
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const canSend = useMemo(() => {
    return !!selectedTaxista && !!origemCoords && !!destinoCoords;
  }, [selectedTaxista, origemCoords, destinoCoords]);

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

  useEffect(() => {
    const pid = localStorage.getItem("passageiroId");
    if (!pid) {
      router.push("/");
      return;
    }

    carregarDados();
    atualizarOrigemPelaLocalizacao();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      carregarDados({ silent: true });
    }, 15000);

    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTaxista?.id]);

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

      setMsg({ type: "ok", text: "Viagem solicitada ✅ (pendente)" });
      setDestinoCoords(null);
      setDestinoTexto("");
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao solicitar." });
    } finally {
      setSending(false);
    }
  }

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
                Selecione um taxista e marque o destino no mapa
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
                msg.type === "ok"
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                  : "bg-red-500/10 text-red-300 border-red-500/20"
              }`}
            >
              {msg.text}
            </div>
          ) : null}

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
                    Quando um taxista clicar “Ficar disponível”, ele aparecerá aqui.
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
        </main>
      </div>
    </>
  );
}