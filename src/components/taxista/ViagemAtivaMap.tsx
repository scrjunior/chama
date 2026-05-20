"use client";

import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";

type LatLng = { lat: number; lng: number };

/**
 * modo = "taxista"   → mostra trajeto DO taxista ATÉ ao passageiro (pickup)
 *                      Marcadores: 🟡 Você (taxista) → 🔵 Passageiro
 * modo = "passageiro" → mostra trajeto DO passageiro ATÉ ao destino
 *                      Marcadores: 🔵 Você (passageiro) → 🔴 Destino
 *                      + 🟡 Taxista a caminho (se disponível)
 */
type Props = {
  origemCoords: LatLng;   // posição do passageiro
  destinoCoords: LatLng;  // destino final
  taxistaPos: LatLng | null; // posição atual do taxista (GPS)
  modo: "taxista" | "passageiro";
};

function makeDivIcon(color: string, size = 20, label?: string, emoji?: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
      ">
        <div style="
          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
          background: ${color};
          border: 3px solid #111318;
          box-shadow: 0 4px 14px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${size * 0.5}px;
        ">${emoji ?? ""}</div>
        ${
          label
            ? `<div style="
            background: #111318cc;
            color: #fff;
            font-size: 10px;
            font-family: 'DM Sans', sans-serif;
            padding: 1px 5px;
            border-radius: 4px;
            white-space: nowrap;
          ">${label}</div>`
            : ""
        }
      </div>
    `,
    iconSize: [size, 40],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -12],
  });
}

function RoutePolyline({
  origem,
  destino,
}: {
  origem: LatLng;
  destino: LatLng;
}) {
  const map = useMap();
  const polyRef = useRef<L.Polyline | null>(null);
  const routeRef = useRef<L.Polyline | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (polyRef.current) { polyRef.current.remove(); polyRef.current = null; }
    if (routeRef.current) { routeRef.current.remove(); routeRef.current = null; }
    if (abortRef.current) abortRef.current.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    const url = `https://router.project-osrm.org/route/v1/driving/${origem.lng},${origem.lat};${destino.lng},${destino.lat}?overview=full&geometries=geojson`;

    fetch(url, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const coords = data?.routes?.[0]?.geometry?.coordinates as [number, number][];
        if (!coords?.length) return;

        const latLngs = coords.map(([lng, lat]) => L.latLng(lat, lng));

        polyRef.current = L.polyline(latLngs, {
          color: "#0f1117", weight: 7, opacity: 0.7,
        }).addTo(map);

        routeRef.current = L.polyline(latLngs, {
          color: "#facc15", weight: 4, opacity: 1,
        }).addTo(map);

        map.fitBounds(L.latLngBounds(latLngs), { padding: [40, 40] });
      })
      .catch(() => {
        const latLngs = [
          L.latLng(origem.lat, origem.lng),
          L.latLng(destino.lat, destino.lng),
        ];
        polyRef.current = L.polyline(latLngs, { color: "#0f1117", weight: 6, opacity: 0.6 }).addTo(map);
        routeRef.current = L.polyline(latLngs, {
          color: "#facc15", weight: 3, opacity: 0.9, dashArray: "8, 6",
        }).addTo(map);
        map.fitBounds(L.latLngBounds(latLngs), { padding: [40, 40] });
      });

    return () => {
      controller.abort();
      polyRef.current?.remove();
      routeRef.current?.remove();
    };
  }, [map, origem.lat, origem.lng, destino.lat, destino.lng]);

  return null;
}

export default function ViagemAtivaMap({ origemCoords, destinoCoords, taxistaPos, modo }: Props) {
  // ────────────────────────────────────────────────────────────────
  // MODO TAXISTA
  // O taxista precisa de ir BUSCAR o passageiro primeiro.
  // Trajeto principal: posição do taxista → posição do passageiro (pickup)
  // Quando não há GPS do taxista, mostra trajeto passageiro → destino
  // ────────────────────────────────────────────────────────────────
  if (modo === "taxista") {
    const pickupRouteStart = taxistaPos ?? origemCoords;
    const center: [number, number] = [pickupRouteStart.lat, pickupRouteStart.lng];

    return (
      <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
        <MapContainer center={center} zoom={14} scrollWheelZoom style={{ width: "100%", height: 380 }}>
          <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Trajeto: taxista → passageiro (pickup) */}
          <RoutePolyline origem={pickupRouteStart} destino={origemCoords} />

          {/* Posição do taxista (Você) */}
          {taxistaPos && (
            <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Você", "🛵")}>
              <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>🛵 A sua posição</div></div></Popup>
            </Marker>
          )}

          {/* Posição do passageiro (ponto de pickup) */}
          <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 20, "Passageiro")}>
            <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>👤 Local de pickup</div><div style={{ fontSize: 12, opacity: 0.8 }}>Vai buscar aqui</div></div></Popup>
          </Marker>

          {/* Destino final (referência) */}
          <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 16, "Destino")}>
            <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>🏁 Destino final</div></div></Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  // ────────────────────────────────────────────────────────────────
  // MODO PASSAGEIRO
  // O passageiro quer ver o taxista a chegar até si.
  // Trajeto principal: posição do taxista → passageiro (se taxistaPos disponível)
  // Fallback: passageiro → destino
  // ────────────────────────────────────────────────────────────────
  const routeStart = taxistaPos ?? origemCoords;
  const routeEnd = taxistaPos ? origemCoords : destinoCoords;
  const center: [number, number] = taxistaPos
    ? [taxistaPos.lat, taxistaPos.lng]
    : [origemCoords.lat, origemCoords.lng];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
      <MapContainer center={center} zoom={14} scrollWheelZoom style={{ width: "100%", height: 380 }}>
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Trajeto: taxista → passageiro (se GPS disponível) ou passageiro → destino */}
        <RoutePolyline origem={routeStart} destino={routeEnd} />

        {/* Posição do passageiro (Você) */}
        <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 22, "Você")}>
          <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>📍 A sua posição</div></div></Popup>
        </Marker>

        {/* Destino */}
        <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 20, "Destino")}>
          <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>🏁 Destino</div></div></Popup>
        </Marker>

        {/* Taxista a caminho */}
        {taxistaPos && (
          <Marker position={[taxistaPos.lat, taxistaPos.lng]} icon={makeDivIcon("#facc15", 22, "Taxista 🛵")}>
            <Popup><div style={{ minWidth: 140 }}><div style={{ fontWeight: 700 }}>🛵 Taxista a caminho</div></div></Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
