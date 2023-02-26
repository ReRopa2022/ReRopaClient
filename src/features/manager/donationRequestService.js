import axios from "axios";

const API_URL = "https://reropa-server.onrender.com/api/request";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/request";

//Donate a bag
const donateRequest = async (donationRequestData) => {
  const res = await axios.post(API_URL, donationRequestData);
  if (res.data) {
    return res.data;
  }
};

const donationRequestService = {
  donateRequest,
};

export default donationRequestService;
