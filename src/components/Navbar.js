import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import GreenButton from "./ui/GreenButton";
import LoggedOffNav from "./navbars/LoggedOffNav";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    await dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full ">
      <Link to="/">
        <h1 className="text-green-500 text-4xl font-bold cursor-pointer">
          ReRopa
        </h1>
      </Link>

      <div>
        {!props.isUser && <LoggedOffNav />}

        {props.isUser && !props.isManager && (
          <Link className="pl-2" to="/donate">
            <GreenButton buttonName="תרומה" />
          </Link>
        )}
        {props.isUser && props.isManager && (
          <Link className="pl-2" to="/manager-home">
            <GreenButton buttonName="פעולות מנהל" />
          </Link>
        )}
        {props.isUser && (
          <GreenButton buttonName="התנתק" onClickButton={onLogout} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
