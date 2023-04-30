import React from "react";
import useGeoLocation from "../../hooks/useGeoLocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position = [51.505, -0.09];
const Map = () => {
  const location = useGeoLocation();
  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {location && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
