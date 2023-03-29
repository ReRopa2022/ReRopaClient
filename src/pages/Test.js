import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import GreenButton from "../components/ui/GreenButton";

const Test = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = async () => {
    await dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between xs:p-1 p-4 z-[100] w-full bg-green-100 ">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/assets/Logo.png"}
          alt="logo"
          width="150"
          height="20"
        />
      </Link>

      <div className="flex flex-row flex-wrap">
        <div>
          <Link className="xs:pl-0 pl-2 " to="/manager-home">
            <GreenButton buttonName="פעולות מנהל" />
          </Link>
          <GreenButton buttonName="התנתק" onClickButton={onLogout} />
        </div>
      </div>
    </div>
  );
};
export default Test;
