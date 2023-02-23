import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvira, FaHandsHelping, FaSearchLocation } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

const ManagerHome = () => {
  const navigate = useNavigate();

  const onClickAddLocation = () => {
    navigate("/add-location");
  };
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
            <button
              onClick={onClickAddLocation}
              className="flex justify-center rounded-full px-5 py-5 shadow-md"
            >
              <HiLocationMarker className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">
                הוסף נקודת איסוף
              </h1>
            </button>
          </div>
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <GiReceiveMoney className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">חיסכון</h1>
            </button>
          </div>
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <FaHandsHelping className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">חברה</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerHome;
