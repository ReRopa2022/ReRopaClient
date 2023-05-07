import React from "react";
import { Link } from "react-router-dom";
import { onMovingDonation } from "../../utils";
import GreenButton from "../ui/GreenButton";

//const LOCALHOST_API_URL = "http://localhost:5000/api/stats-donations";

const LoggedOffNav = () => {
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
