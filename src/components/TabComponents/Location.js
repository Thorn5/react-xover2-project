import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import useFetch from "../useFetch";
export default function Location() {
  const [zoom, setZoom] = useState(13);
  return <Map></Map>;
}
