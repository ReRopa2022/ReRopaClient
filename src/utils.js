import axios from "axios";

const API_URL = "https://reropa-server.onrender.com/api/stats-donations";

export function extractErrorMessage(error) {
  return error.response?.data?.message || error.message || error.toString();
}

export function distance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const phi1 = (lat1 * Math.PI) / 180; // Convert latitudes to radians
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) *
      Math.cos(phi2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = (R * c) / 1000; // Distance in kilometers

  return d;
}

export const onMovingDonation = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
