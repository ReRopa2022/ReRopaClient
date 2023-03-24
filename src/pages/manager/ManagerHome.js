import React from "react";
import { Link } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";
import { FaBox } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsTable } from "react-icons/bs";

const ManagerHome = () => {
  return (
    <>
      <div className="text-center bg-green-500 h-48 ">
        <div className="w-full flex justify-center">
          <h1 className="mt-4 text-6xl font-bold tracking-tighter text-white">
            ברוכה הבאה
          </h1>
        </div>
        <div className="w-full flex justify-center mt-7">
          <h2 className="mt-4 text-4xl font-light tracking-tighter flex flex-wrap text-white">
            דף פעולות מנהל{" "}
          </h2>
        </div>
      </div>
      <div className=" bg-white w-full mt-6">
        <div className="flex justify-around flex-wrap">
          <div className="flex justify-center pb-2">
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <HiLocationMarker className="text-green-500 text-5xl " />
              <Link
                to="/add-location"
                className="text-green-500 text-3xl font-bold"
              >
                הוסף נקודת איסוף
              </Link>
            </button>
          </div>
          <div className="flex justify-center pb-2">
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <BiDonateHeart className="text-green-500 text-5xl " />
              <Link
                to="/donate-request"
                className="text-green-500 text-3xl font-bold"
              >
                בקשת תרומה
              </Link>
            </button>
          </div>
          <div className="flex justify-center pb-2">
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <FaBox className="text-green-500 text-5xl " />
              <Link
                to="/excesses-report"
                className="text-green-500 text-3xl font-bold"
              >
                דיווח על עודפים
              </Link>
            </button>
          </div>
          <div className="flex justify-center pb-2">
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <BsTable className="text-green-500 text-5xl " />
              <Link
                to="/info-tables"
                className="text-green-500 text-3xl font-bold"
              >
                טבלאות מידע
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerHome;
