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
    <div className="flex items-center justify-between p-4 z-[100] w-full bg-green-100  ">
      <Link to="/">
        <h1 className="text-green-600 text-4xl font-bold cursor-pointer">
          ReRopa
        </h1>
      </Link>

      <div className="flex flex-row flex-wrap">
        <div>{!props.isUser && <LoggedOffNav />}</div>
        <div>
          {props.isUser && !props.isManager && (
            <Link className="pl-2" to="/donate">
              <GreenButton buttonName="תרומה" />
            </Link>
          )}
        </div>
        <div>
          {props.isUser && props.isManager && (
            <Link className="pl-2" to="/manager-home">
              <GreenButton buttonName="פעולות מנהל" />
            </Link>
          )}
        </div>
        <div>
          {props.isUser && (
            <GreenButton buttonName="התנתק" onClickButton={onLogout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
