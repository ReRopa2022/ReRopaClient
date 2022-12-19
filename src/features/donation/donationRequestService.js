import axios from "axios";

const API_URL = "https://reropaserver.azurewebsites.net/api/request";

//Donate a bag
const donateRequest = async (donationRequestData) => {
  const res = await axios.post(API_URL, donationRequestData);
  if (res.data) {
    localStorage.setItem("donationRequest", JSON.stringify(res.data));
  }
  return res.data;
};

const donationRequestService = {
  donateRequest,
};

export default donationRequestService;
