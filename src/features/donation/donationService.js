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

//Update donation status
const updateStatus = async ({ donation_id, status }) => {
  const res = await axios.patch(API_URL, { donation_id, status });
  if (res.data) {
    return res.data;
  }
};
//Delete a donation
const deleteDonation = async (donation_id) => {
  const res = await axios.delete(API_URL, donation_id);
  if (res.data) {
    return res.data;
  }
};

//Donate book or game
const donateBookOrGame = async (donationData) => {
  const res = await axios.post(API_URL + "/book-or-game", donationData);
  if (res.data) {
    return res.data;
  }
};
//Update item status
const updateBookOrGameStatus = async ({ donation_id, status }) => {
  const res = await axios.patch(API_URL + "/book-or-game", {
    donation_id,
    status,
  });
  if (res.data) {
    return res.data;
  }
};
//Delete a item
const deleteBookOrGame = async (donation_id) => {
  const res = await axios.delete(API_URL + "/book-or-game", donation_id);
  if (res.data) {
    return res.data;
  }
};

const donationService = {
  donate,
  updateStatus,
  deleteDonation,
  donateBookOrGame,
  updateBookOrGameStatus,
  deleteBookOrGame,
};

export default donationService;
