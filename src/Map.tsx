import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

type MapProps = { className?: string, onLocationClick: (lat: number, lon: number) => void };

function Map({ className,onLocationClick }: MapProps) {
  return (
    <>
      <MapContainer
        className={"h-full w-full"}
        center={[51.505, -0.09] as any}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker onClick={onLocationClick}/>
      </MapContainer>
    </>
  );
}

export default Map;
