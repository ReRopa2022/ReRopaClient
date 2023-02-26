import axios from "axios";

const API_URL = "https://reropa-server.onrender.com/api/donate";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";

//Donate a bag
const donate = async (donationData) => {
  const res = await axios.post(API_URL, donationData);
  if (res.data) {
    return res.data;
  }
};

const donationService = {
  donate,
};

export default donationService;
