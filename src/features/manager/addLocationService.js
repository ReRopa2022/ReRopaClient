import axios from "axios";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/location";

//Add Location
const addLocation = async (locationData) => {
  const res = await axios.post(API_URL, locationData);
  if (res.data) {
    return res.data;
  }
};

const updateLocation = async (locationData) => {
  const res = await axios.put(API_URL, locationData);
  if (res.data) {
    return res.data;
  }
};

const deleteLocation = async (locationId) => {
  await axios.delete(API_URL, locationId);
};

const addLocationService = {
  addLocation,
  updateLocation,
  deleteLocation,
};

export default addLocationService;
