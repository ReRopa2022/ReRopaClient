import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import GreenButton from "./GreenButton";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
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
        {!props.isManager && (
          <Link className="pl-2" to="/about">
            <GreenButton buttonName="  ?מי אנחנו" />
          </Link>
        )}

        {!props.isUser && (
          <>
            <Link className="pl-2" to="/login">
              <GreenButton buttonName="התחברות" />
            </Link>
            <Link to="/register">
              <GreenButton buttonName="הרשמה" />
            </Link>
          </>
        )}

        {props.isUser && !props.isManager && (
          <Link className="pl-2" to="/donate">
            <GreenButton buttonName="תרומה" />
          </Link>
        )}
        {props.isUser && props.isManager && (
          <Link className="pl-2" to="/donate-request">
            <GreenButton buttonName="בקש תרומה" />
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
