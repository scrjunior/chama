"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type LatLng = { lat: number; lng: number };

/**
 * modo = "taxista"
 *   → Trajeto: posição do taxista → posição do passageiro (ir buscar)
 *   → 🟡 Você (taxista)  🔵 Passageiro  🔴 Destino final (referência)
 *
 * modo = "passageiro"
 *   → Trajeto: posição do passageiro → destino (a viagem em si)
 *   → 🔵 Você (passageiro)  🔴 Destino  🟡 Taxista a caminho (se GPS disponível)
 */
type Props = {
  origemCoords: LatLng;      // posição GPS do passageiro
  destinoCoords: LatLng;     // destino marcado no mapa
  taxistaPos: LatLng | null; // posição GPS do taxista (pode ser null)
  modo: "taxista" | "passageiro";
};

function makeDivIcon(color: string, size = 20, label?: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div style="
          width:${size}px;height:${size}px;border-radius:9999px;
          background:${color};border:3px solid #111318;
          box-shadow:0 4px 14px rgba(0,0,0,0.4);
        "></div>
        ${label ? `<div style="background:#111318cc;color:#fff;font-size:10px;
          font-family:'DM Sans',sans-serif;padding:1px 5px;border-radius:4px;
          white-space:nowrap;">${label}</div>` : ""}
      </div>`,
    iconSize: [size, 40],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -12],
  });
}

function RoutePolyline({ origem, destino }: { origem: LatLng; destino: LatLng }) {
  const map = useMap();
  const shadowRef = useRef<L.Polyline | null>(null);
  const lineRef = useRef<L.Polyline | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    shadowRef.current?.remove(); shadowRef.current = null;
    lineRef.current?.remove();   lineRef.current = null;
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
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 7, opacity: 0.7 }).addTo(map);
        lineRef.current   = L.polyline(lls, { color: "#facc15", weight: 4, opacity: 1  }).addTo(map);
        map.fitBounds(L.latLngBounds(lls), { padding: [40, 40] });
      })
      .catch(() => {
        // fallback: linha reta
        const lls = [L.latLng(origem.lat, origem.lng), L.latLng(destino.lat, destino.lng)];
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 6, opacity: 0.6 }).addTo(map);
        lineRef.current   = L.polyline(lls, { color: "#facc15", weight: 3, opacity: 0.9, dashArray: "8,6" }).addTo(map);
        map.fitBounds(L.latLngBounds(lls), { padding: [40, 40] });
      });

    return () => {
      ctrl.abort();
      shadowRef.current?.remove();
      lineRef.current?.remove();
    };
  }, [map, origem.lat, origem.lng, destino.lat, destino.lng]);

  return null;
}

export default function ViagemAtivaMap({ origemCoords, destinoCoords, taxistaPos, modo }: Props) {
  const center: [number, number] =
    modo === "taxista"
      ? taxistaPos ? [taxistaPos.lat, taxistaPos.lng] : [origemCoords.lat, origemCoords.lng]
      : [origemCoords.lat, origemCoords.lng];

  // Trajeto a desenhar
  // Taxista:    taxista → passageiro (ir buscar)   ou   passageiro → destino (fallback sem GPS)
  // Passageiro: passageiro → destino (sempre — a viagem que vai fazer)
  const routeOrigem = modo === "taxista" && taxistaPos ? taxistaPos : origemCoords;
  const routeDestino = modo === "taxista" && taxistaPos ? origemCoords : destinoCoords;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
      <MapContainer center={center} zoom={14} scrollWheelZoom style={{ width: "100%", height: 380 }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutePolyline origem={routeOrigem} destino={routeDestino} />

        {/* ── MODO TAXISTA ── */}
        {modo === "taxista" && (
          <>
            {taxistaPos && (
              <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Você 🛵")}>
                <Popup><b>A sua posição</b></Popup>
              </Marker>
            )}
            {/* Passageiro = ponto de pickup */}
            <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 20, "Passageiro")}>
              <Popup><b>👤 Ir buscar aqui</b></Popup>
            </Marker>
            {/* Destino final como referência */}
            <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 16, "Destino")}>
              <Popup><b>🏁 Destino final</b></Popup>
            </Marker>
          </>
        )}

        {/* ── MODO PASSAGEIRO ── */}
        {modo === "passageiro" && (
          <>
            {/* Você = passageiro */}
            <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 22, "Você")}>
              <Popup><b>📍 A sua posição</b></Popup>
            </Marker>
            {/* Destino */}
            <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 20, "Destino")}>
              <Popup><b>🏁 Destino</b></Popup>
            </Marker>
            {/* Taxista a caminho (se GPS disponível) */}
            {taxistaPos && (
              <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Taxista 🛵")}>
                <Popup><b>🛵 Taxista a caminho</b></Popup>
              </Marker>
            )}
          </>
        )}
      </MapContainer>
    </div>
  );
}
