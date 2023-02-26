import axios from "axios";

const API_URL = "https://reropa-server.onrender.com/api/request";
//For locally running
const LOCALHOST_API_URL = "http://localhost:5000/api/request";

//Report excesses
const excessReport = async (excessReportData) => {
  const res = await axios.post(API_URL, excessReportData);
  if (res.data) {
    return res.data;
  }
};

const donationExcessesService = {
  excessReport,
};

export default donationExcessesService;
