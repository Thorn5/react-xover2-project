import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useFetch from "../useFetch";
export default function Location() {
  return (
    <MapContainer center zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position>
        <Popup>This is your location</Popup>
      </Marker>
    </MapContainer>
  );
}
