import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

type LocationMarkerProps = { onClick: (lat: number, lon: number) => void };

function LocationMarker({ onClick }: LocationMarkerProps) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      map.flyTo([lat, lng]);
      setPosition([lat, lng]);
      onClick(lat, lng)
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
