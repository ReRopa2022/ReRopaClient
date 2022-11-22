import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/login">
          <button className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
