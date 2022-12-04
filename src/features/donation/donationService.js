import axios from "axios";

const API_URL = "https://reropaserver.azurewebsites.net/api/donate";

//Donate a bag
const donate = async (donationData) => {
  const res = await axios.post(API_URL, donationData);
  if (res.data) {
    localStorage.setItem("donation", JSON.stringify(res.data));
  }
  return res.data;
};

const donationService = {
  donate,
};

export default donationService;
