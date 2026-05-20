"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type LatLng = { lat: number; lng: number };

type Props = {
  origemCoords: LatLng;      // posição GPS do passageiro
  destinoCoords: LatLng;     // destino marcado no mapa
  taxistaPos: LatLng | null; // posição GPS do taxista
  modo: "taxista" | "passageiro";
};

function makeDivIcon(color: string, size = 20, label?: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div style="width:${size}px;height:${size}px;border-radius:9999px;
          background:${color};border:3px solid #111318;
          box-shadow:0 4px 14px rgba(0,0,0,0.4);"></div>
        ${label ? `<div style="background:#111318cc;color:#fff;font-size:10px;
          font-family:'DM Sans',sans-serif;padding:1px 5px;border-radius:4px;
          white-space:nowrap;">${label}</div>` : ""}
      </div>`,
    iconSize: [size, 40],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -12],
  });
}

/**
 * Desenha UMA polyline entre dois pontos via OSRM.
 * color: cor da linha principal | dashed: linha tracejada
 */
function RoutePolyline({
  origem, destino, color = "#facc15", dashed = false, fitBounds = false,
}: {
  origem: LatLng; destino: LatLng;
  color?: string; dashed?: boolean; fitBounds?: boolean;
}) {
  const map = useMap();
  const shadowRef = useRef<L.Polyline | null>(null);
  const lineRef   = useRef<L.Polyline | null>(null);
  const abortRef  = useRef<AbortController | null>(null);

  useEffect(() => {
    shadowRef.current?.remove(); shadowRef.current = null;
    lineRef.current?.remove();   lineRef.current   = null;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    const url = `https://router.project-osrm.org/route/v1/driving/${origem.lng},${origem.lat};${destino.lng},${destino.lat}?overview=full&geometries=geojson`;

    fetch(url, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((data) => {
        const coords = data?.routes?.[0]?.geometry?.coordinates as [number, number][] | undefined;
        if (!coords?.length) throw new Error("no route");
        const lls = coords.map(([lng, lat]) => L.latLng(lat, lng));
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 6, opacity: 0.6 }).addTo(map);
        lineRef.current   = L.polyline(lls, {
          color, weight: 4, opacity: 1,
          dashArray: dashed ? "8,6" : undefined,
        }).addTo(map);
        if (fitBounds) map.fitBounds(L.latLngBounds(lls), { padding: [40, 40] });
      })
      .catch(() => {
        const lls = [L.latLng(origem.lat, origem.lng), L.latLng(destino.lat, destino.lng)];
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 6, opacity: 0.5 }).addTo(map);
        lineRef.current   = L.polyline(lls, {
          color, weight: 3, opacity: 0.9, dashArray: "8,6",
        }).addTo(map);
        if (fitBounds) map.fitBounds(L.latLngBounds(lls), { padding: [40, 40] });
      });

    return () => {
      ctrl.abort();
      shadowRef.current?.remove();
      lineRef.current?.remove();
    };
  }, [map, origem.lat, origem.lng, destino.lat, destino.lng, color, dashed, fitBounds]);

  return null;
}

/** Ajusta o mapa para mostrar todos os pontos */
function FitAll({ points }: { points: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length < 2) return;
    const bounds = L.latLngBounds(points.map((p) => L.latLng(p.lat, p.lng)));
    map.fitBounds(bounds, { padding: [40, 40] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export default function ViagemAtivaMap({ origemCoords, destinoCoords, taxistaPos, modo }: Props) {
  const center: [number, number] =
    taxistaPos ? [taxistaPos.lat, taxistaPos.lng] : [origemCoords.lat, origemCoords.lng];

  const allPoints = [
    taxistaPos ?? origemCoords,
    origemCoords,
    destinoCoords,
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
      <MapContainer center={center} zoom={14} scrollWheelZoom style={{ width: "100%", height: 380 }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Ajustar câmera para mostrar todos os pontos */}
        <FitAll points={allPoints} />

        {/* ── MODO TAXISTA ───────────────────────────────────────────
            Linha 1 (amarela sólida):  taxista → passageiro  (ir buscar)
            Linha 2 (branca tracejada): passageiro → destino  (a viagem)
        */}
        {modo === "taxista" && (
          <>
            {taxistaPos ? (
              <RoutePolyline
                origem={taxistaPos}
                destino={origemCoords}
                color="#facc15"
                dashed={false}
              />
            ) : null}
            <RoutePolyline
              origem={origemCoords}
              destino={destinoCoords}
              color="#94a3b8"
              dashed={true}
            />

            {/* Marcador do taxista */}
            {taxistaPos && (
              <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Você 🛵")}>
                <Popup><b>🛵 A sua posição</b></Popup>
              </Marker>
            )}
            {/* Pickup — onde está o passageiro */}
            <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 20, "Passageiro")}>
              <Popup><b>👤 Ir buscar aqui</b></Popup>
            </Marker>
            {/* Destino final */}
            <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 18, "Destino")}>
              <Popup><b>🏁 Destino final</b></Popup>
            </Marker>
          </>
        )}

        {/* ── MODO PASSAGEIRO ────────────────────────────────────────
            Linha 1 (amarela sólida):   taxista → passageiro  (a chegar)
            Linha 2 (amarela tracejada): passageiro → destino  (a viagem)
            Se não há GPS do taxista: só linha passageiro → destino
        */}
        {modo === "passageiro" && (
          <>
            {taxistaPos ? (
              <>
                {/* Taxista a caminho → passageiro */}
                <RoutePolyline
                  origem={taxistaPos}
                  destino={origemCoords}
                  color="#facc15"
                  dashed={false}
                />
                {/* Passageiro → destino (a viagem depois do pickup) */}
                <RoutePolyline
                  origem={origemCoords}
                  destino={destinoCoords}
                  color="#facc15"
                  dashed={true}
                />
              </>
            ) : (
              /* Sem GPS do taxista: mostrar só passageiro → destino */
              <RoutePolyline
                origem={origemCoords}
                destino={destinoCoords}
                color="#facc15"
                dashed={false}
                fitBounds={true}
              />
            )}

            {/* Taxista a caminho */}
            {taxistaPos && (
              <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Taxista 🛵")}>
                <Popup><b>🛵 Taxista a caminho</b></Popup>
              </Marker>
            )}
            {/* Você = passageiro */}
            <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 22, "Você")}>
              <Popup><b>📍 A sua posição</b></Popup>
            </Marker>
            {/* Destino */}
            <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 20, "Destino")}>
              <Popup><b>🏁 Destino</b></Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}
