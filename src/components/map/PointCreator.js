import React from "react";
import { Popup, Marker } from "react-leaflet";

const PointCreator = ({ point }) => {
  return (
    <Marker position={[point.lat, point.long]}>
      <Popup>
        <h1>
          {point.street} {point.street_no}
        </h1>
        <p>{point.info}</p>
        <p>{point.type}</p>
      </Popup>
    </Marker>
  );
};

export default PointCreator;
