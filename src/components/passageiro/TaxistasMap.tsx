"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";


type TaxistaItem = {
  id: string;
  nome: string;
  apelido: string;
  lat?: number | null;
  lng?: number | null;
  moto: null | { nomeMoto: string; matricula: string };
};

type LatLng = {
  lat: number;
  lng: number;
};

type Props = {
  taxistas: TaxistaItem[];
  selectedId: string;
  passengerPos: LatLng | null;
  destinationPos: LatLng | null;
  onSelect: (taxista: TaxistaItem) => void;
  onPickDestination: (coords: LatLng) => void;
};

const DEFAULT_CENTER: [number, number] = [-25.9653, 32.5892];

function makeDivIcon(color: string, size = 18) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
        background: ${color};
        border: 3px solid #111318;
        box-shadow: 0 6px 18px rgba(0,0,0,0.35);
      "></div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -10],
  });
}

function FitToMarkers({ points }: { points: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((p) => L.latLng(p[0], p[1])));
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map, points]);

  return null;
}

function DestinationPicker({
  onPickDestination,
}: {
  onPickDestination: (coords: LatLng) => void;
}) {
  useMapEvents({
    click(e) {
      onPickDestination({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return null;
}

export default function TaxistasMap({
  taxistas,
  selectedId,
  passengerPos,
  destinationPos,
  onSelect,
  onPickDestination,
}: Props) {
  const points = useMemo(() => {
    const items: [number, number][] = [];

    taxistas.forEach((t) => {
      if (Number.isFinite(t.lat) && Number.isFinite(t.lng)) {
        items.push([t.lat as number, t.lng as number]);
      }
    });

    if (passengerPos) items.push([passengerPos.lat, passengerPos.lng]);
    if (destinationPos) items.push([destinationPos.lat, destinationPos.lng]);

    return items;
  }, [taxistas, passengerPos, destinationPos]);

  const center =
    passengerPos
      ? [passengerPos.lat, passengerPos.lng]
      : points[0] ?? DEFAULT_CENTER;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117]">
      <MapContainer
        center={center as [number, number]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: 420 }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitToMarkers points={points} />
        <DestinationPicker onPickDestination={onPickDestination} />

        {passengerPos ? (
          <Marker
            position={[passengerPos.lat, passengerPos.lng]}
            icon={makeDivIcon("#3b82f6", 20)}
          >
            <Popup>
              <div style={{ minWidth: 160 }}>
                <div style={{ fontWeight: 700 }}>Sua localização</div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>
                  Origem automática da viagem
                </div>
              </div>
            </Popup>
          </Marker>
        ) : null}

        {destinationPos ? (
          <Marker
            position={[destinationPos.lat, destinationPos.lng]}
            icon={makeDivIcon("#ef4444", 20)}
          >
            <Popup>
              <div style={{ minWidth: 160 }}>
                <div style={{ fontWeight: 700 }}>Destino</div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>
                  Destino escolhido no mapa
                </div>
              </div>
            </Popup>
          </Marker>
        ) : null}

        {taxistas.map((t) => {
          if (!Number.isFinite(t.lat) || !Number.isFinite(t.lng)) return null;

          const pos: [number, number] = [t.lat as number, t.lng as number];
          const active = selectedId === t.id;

          return (
            <Marker
              key={t.id}
              position={pos}
              icon={makeDivIcon(active ? "#facc15" : "#22c55e")}
              eventHandlers={{ click: () => onSelect(t) }}
            >
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontWeight: 700 }}>
                    {t.nome} {t.apelido}
                  </div>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>
                    {t.moto ? `${t.moto.nomeMoto} • ${t.moto.matricula}` : "Sem moto"}
                  </div>
                  <div style={{ fontSize: 12, marginTop: 8 }}>
                    Clique para selecionar este taxista
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}