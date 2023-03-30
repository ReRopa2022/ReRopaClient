import React from "react";
import { Link } from "react-router-dom";
import GreenButton from "../ui/GreenButton";

const LoggedOffNav = () => {
  return (
    <div>
      {" "}
      <Link to="/donate">
        <GreenButton buttonName="תרומה" />
      </Link>
      <Link className="" to="/login">
        <GreenButton buttonName="התחברות מנהל" />
      </Link>
    </div>
  );
};

export default LoggedOffNav;
