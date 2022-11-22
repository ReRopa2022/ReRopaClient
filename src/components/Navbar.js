import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

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
        <Link to="/about">
          <button className="bg-green-500 px-6 py-2 rounded cursor-pointer text-white">
            About
          </button>
        </Link>

        {!user ? (
          <>
            <Link to="/login">
              <button className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <Link to="/">
            <button
              onClick={onLogout}
              className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white"
            >
              Sign Out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
