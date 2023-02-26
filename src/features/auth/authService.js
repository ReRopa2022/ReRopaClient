import axios from "axios";

//Server Url
const API_URL = "https://reropa-server.onrender.com/api/users";

//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/users";

//Register user
const registerUser = async (userData) => {
  const res = await axios.post(API_URL, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "/login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  registerUser,
  login,
  logout,
};

export default authService;
