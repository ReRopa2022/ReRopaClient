import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import axios from "axios";
import useGeoLocation from "../../hooks/useGeoLocation";

import PointsCreator from "./PointsCreator";
const position = [31.998125, 34.945494];
//const API_URL = "https://reropa-server.onrender.com/api/location";
const Map = ({ points }) => {
  //const [points, setPoints] = useState([]);
  const location = useGeoLocation();

  /*useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API_URL);
      setPoints(response.data);
      console.log(response.data);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/
  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points && <PointsCreator points={points} />}
        {location && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>המיקום שלך</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
