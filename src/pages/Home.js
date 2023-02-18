import React from "react";
import { FaEnvira, FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <div className="text-center bg-green-500 h-60">
        <div className="w-full flex justify-center">
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            ReRopa ברוכים הבאים ל
          </h1>
        </div>
        <div className="w-full flex justify-center mt-7">
          <h2 className="mt-4 xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
            הכי חשוב - זה חינוכי
          </h2>
        </div>
      </div>
      <div className=" bg-white w-full mt-6">
        <div className="flex justify-around">
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <FaEnvira className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">סביבה</h1>
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

export default Home;
