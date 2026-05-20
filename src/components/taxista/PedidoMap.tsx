"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type LatLng = { lat: number; lng: number };

type Props = {
  origemCoords: LatLng;
  destinoCoords: LatLng;
};

function makeDivIcon(color: string, size = 18, label?: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div style="width:${size}px;height:${size}px;border-radius:9999px;
          background:${color};border:2px solid #111318;
          box-shadow:0 3px 10px rgba(0,0,0,0.4);"></div>
        ${label ? `<div style="background:#111318dd;color:#fff;font-size:9px;
          font-family:'DM Sans',sans-serif;padding:1px 4px;border-radius:4px;
          white-space:nowrap;">${label}</div>` : ""}
      </div>`,
    iconSize: [size, 36],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -10],
  });
}

function RouteAndFit({ origem, destino }: { origem: LatLng; destino: LatLng }) {
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
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 5, opacity: 0.6 }).addTo(map);
        lineRef.current   = L.polyline(lls, { color: "#facc15", weight: 3, opacity: 1   }).addTo(map);
        map.fitBounds(L.latLngBounds(lls), { padding: [30, 30] });
      })
      .catch(() => {
        const lls = [L.latLng(origem.lat, origem.lng), L.latLng(destino.lat, destino.lng)];
        shadowRef.current = L.polyline(lls, { color: "#0f1117", weight: 5, opacity: 0.5 }).addTo(map);
        lineRef.current   = L.polyline(lls, { color: "#facc15", weight: 3, opacity: 0.9, dashArray: "6,5" }).addTo(map);
        map.fitBounds(L.latLngBounds(lls), { padding: [30, 30] });
      });

    return () => {
      ctrl.abort();
      shadowRef.current?.remove();
      lineRef.current?.remove();
    };
  }, [map, origem.lat, origem.lng, destino.lat, destino.lng]);

  return null;
}

export default function PedidoMap({ origemCoords, destinoCoords }: Props) {
  const center: [number, number] = [origemCoords.lat, origemCoords.lng];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-800 bg-[#0f1117]">
      <MapContainer center={center} zoom={14} scrollWheelZoom={false} zoomControl={false} style={{ width: "100%", height: 200 }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RouteAndFit origem={origemCoords} destino={destinoCoords} />

        <Marker position={[origemCoords.lat, origemCoords.lng]} icon={makeDivIcon("#3b82f6", 16, "Passageiro")}>
          <Popup><b>📍 Origem do passageiro</b></Popup>
        </Marker>
        <Marker position={[destinoCoords.lat, destinoCoords.lng]} icon={makeDivIcon("#ef4444", 16, "Destino")}>
          <Popup><b>🏁 Destino</b></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
