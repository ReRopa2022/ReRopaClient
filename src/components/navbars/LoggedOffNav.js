import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GreenButton from "../ui/GreenButton";

const API_URL = "https://reropa-server.onrender.com/api/stats-donations";
//const LOCALHOST_API_URL = "http://localhost:5000/api/stats-donations";

const LoggedOffNav = () => {
  const onMovingDonation = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {" "}
      <Link to="/donate">
        <GreenButton buttonName="תרומה" onClickButton={onMovingDonation} />
      </Link>
    </div>
  );
};

export default LoggedOffNav;
