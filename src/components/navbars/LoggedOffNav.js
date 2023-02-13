import React from "react";
import { Link } from "react-router-dom";
import GreenButton from "../ui/GreenButton";

const LoggedOffNav = () => {
  return (
    <div>
      {" "}
      <Link to="/anonymous-donate">
        <GreenButton buttonName="תרומה אנונימית" />
      </Link>
      <Link className="pl-2" to="/login">
        <GreenButton buttonName="התחברות" />
      </Link>
      <Link to="/register">
        <GreenButton buttonName="הרשמה" />
      </Link>
    </div>
  );
};

export default LoggedOffNav;
