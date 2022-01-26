import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import '../../pages/main.css';
import 'leaflet/dist/leaflet.css';
import AllLayers from './AllLayers';

function Map() {

  return (
    <>
      <MapContainer 
        center={[52.473351, 6.667982]} 
        zoom={6.5} 
        scrollWheelZoom={true}
        style={{ height: "70vh"}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AllLayers />
      </MapContainer>
    </>
  )
}

export default Map;