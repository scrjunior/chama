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

type Props = {
  origemCoords: LatLng;
  destinoCoords: LatLng;
  taxistaPos: LatLng | null;
};

const DEFAULT_CENTER: [number, number] = [-25.9653, 32.5892];

function makeDivIcon(color: string, size = 20, label?: string) {
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
        "></div>
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
    // Limpar linha anterior
    if (polyRef.current) {
      polyRef.current.remove();
      polyRef.current = null;
    }
    if (routeRef.current) {
      routeRef.current.remove();
      routeRef.current = null;
    }
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    const url = `https://router.project-osrm.org/route/v1/driving/${origem.lng},${origem.lat};${destino.lng},${destino.lat}?overview=full&geometries=geojson`;

    fetch(url, { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const coords = data?.routes?.[0]?.geometry?.coordinates as [number, number][];
        if (!coords?.length) return;

        const latLngs = coords.map(([lng, lat]) => L.latLng(lat, lng));

        // Linha de fundo (sombra)
        polyRef.current = L.polyline(latLngs, {
          color: "#0f1117",
          weight: 7,
          opacity: 0.7,
        }).addTo(map);

        // Linha principal
        routeRef.current = L.polyline(latLngs, {
          color: "#facc15",
          weight: 4,
          opacity: 1,
          dashArray: undefined,
        }).addTo(map);

        // Ajustar o mapa para o percurso
        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds, { padding: [40, 40] });
      })
      .catch(() => {
        // Se OSRM falhar, mostrar linha reta como fallback
        const latLngs = [
          L.latLng(origem.lat, origem.lng),
          L.latLng(destino.lat, destino.lng),
        ];
        polyRef.current = L.polyline(latLngs, {
          color: "#0f1117",
          weight: 6,
          opacity: 0.6,
        }).addTo(map);
        routeRef.current = L.polyline(latLngs, {
          color: "#facc15",
          weight: 3,
          opacity: 0.9,
          dashArray: "8, 6",
        }).addTo(map);

        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds, { padding: [40, 40] });
      });

    return () => {
      controller.abort();
      polyRef.current?.remove();
      routeRef.current?.remove();
    };
  }, [map, origem.lat, origem.lng, destino.lat, destino.lng]);

  return null;
}

export default function ViagemAtivaMap({ origemCoords, destinoCoords, taxistaPos }: Props) {
  const center: [number, number] = taxistaPos
    ? [taxistaPos.lat, taxistaPos.lng]
    : [origemCoords.lat, origemCoords.lng];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={true}
        style={{ width: "100%", height: 380 }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutePolyline origem={origemCoords} destino={destinoCoords} />

        {/* Marcador de origem (passageiro) */}
        <Marker
          position={[origemCoords.lat, origemCoords.lng]}
          icon={makeDivIcon("#3b82f6", 20, "Origem")}
        >
          <Popup>
            <div style={{ minWidth: 140 }}>
              <div style={{ fontWeight: 700 }}>📍 Origem do passageiro</div>
            </div>
          </Popup>
        </Marker>

        {/* Marcador de destino */}
        <Marker
          position={[destinoCoords.lat, destinoCoords.lng]}
          icon={makeDivIcon("#ef4444", 20, "Destino")}
        >
          <Popup>
            <div style={{ minWidth: 140 }}>
              <div style={{ fontWeight: 700 }}>🏁 Destino</div>
            </div>
          </Popup>
        </Marker>

        {/* Posição atual do taxista */}
        {taxistaPos && (
          <Marker
            position={[taxistaPos.lat, taxistaPos.lng]}
            icon={makeDivIcon("#facc15", 22, "Você")}
          >
            <Popup>
              <div style={{ minWidth: 140 }}>
                <div style={{ fontWeight: 700 }}>🛵 A sua posição</div>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}