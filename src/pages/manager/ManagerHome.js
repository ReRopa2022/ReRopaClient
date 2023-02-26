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
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            ברוכה הבאה
          </h1>
        </div>
        <div className="w-full flex justify-center mt-7">
          <h2 className="mt-4 xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
            דף פעולות מנהל{" "}
          </h2>
        </div>
      </div>
      <div className=" bg-white w-full mt-6">
        <div className="flex justify-around">
          <div className="flex justify-center">
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
          <div>
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
          <div>
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
          <div>
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
