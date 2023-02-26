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

const addLocationService = {
  addLocation,
};

export default addLocationService;
