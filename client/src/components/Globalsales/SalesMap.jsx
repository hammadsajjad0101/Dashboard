import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SalesMap = ({ salesData, center = [20, 0], zoom = 1 }) => {
  return (
    <div className="map-container container m-0 p-0">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        />
        {salesData.map((data, index) =>
          data.lat && data.lng ? (
            <Marker key={index} position={[data.lat, data.lng]} />
          ) : null
        )}
      </MapContainer>
    </div>
  );
};

export default SalesMap;
