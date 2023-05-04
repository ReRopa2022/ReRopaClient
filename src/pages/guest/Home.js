import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvira, FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { onMovingDonation } from "../../utils";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const title = "ברוכים.ות הבאים.ות לעמותת יד משהם";

  useEffect(() => {
    if (user?.isManager) {
      navigate("/manager-home");
      return;
    }
  }, [navigate, user?.isManager]);

  return (
    <div className="h-full w-full">
      <div className="text-center  w-full bg-green-100 xs:py-0 py-10  align-middle ">
        <div className="w-full flex justify-center  ">
          <h1 className="rtl-grid mt-4 text-8xl md:text-5x xs:text-2xl font-bold text-green-500">
            {title}
          </h1>
        </div>
        <div className="w-full flex justify-center xs:mt-2 mt-7">
          <h2 className="mt-4 text-5xl xs:text-xl  font-light  text-green-600">
            לעשות טוב לאדם ולאדמה
          </h2>
        </div>
      </div>

      <div className="bg-white w-full xs:mt-1 xs:mb-4 mt-6  mb-10">
        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col items-center w-full justify-center p-10">
            <Link className=" w-[25%] justify-center items-center" to="/donate">
              {" "}
              <button
                onClick={onMovingDonation}
                className="bg-green-600 flex flex-row w-full justify-center pb-20  hover:bg-green-700 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 rounded"
              >
                <h1
                  className=" rtl-grid mt-4 text-8xl md:text-5x xs:text-2xl font-bold text-white
         "
                >
                  תרומה
                </h1>
              </button>
            </Link>
            <div className="flex flex-row w-full justify-center ">
              <h1 className="flex justify-center w-full">
                <FaEnvira className="text-green-500 xs:text-4xl  text-7xl" />
                <span className="text-green-500 xs:text-4xl text-7xl font-bold">
                  סביבה
                </span>
              </h1>
            </div>

            <div className="flex flex-row justify-center text-center text-green-600 font-bold text-xl mt-3">
              שימוש חוזר בחפצים והפחתה בפסולת מזהמת
            </div>
          </div>
          <div className="flex flex-col w-full justify-center p-10">
            <div className="flex flex-row w-full justify-center">
              <h1 className="flex justify-center w-full">
                <GiReceiveMoney className="text-green-500 xs:text-4xl  text-7xl " />
                <span className="text-green-500 xs:text-4xl  text-7xl font-bold">
                  חיסכון
                </span>
              </h1>
            </div>
            <div className="flex flex-row justify-center text-center text-green-600 font-bold text-xl mt-3">
              להשיג בקלות חפצים בחינם, ולפנות את הכסף לדברים שאנחנו צריכים
            </div>
          </div>
          <div className="flex flex-col w-full justify-center p-10 ">
            <div className="flex flex-row  w-full justify-center">
              <h1 className="flex justify-center w-full">
                <FaHandsHelping className="text-green-500 xs:text-4xl  text-7xl " />
                <span className="text-green-500 xs:text-4xl  text-7xl font-bold">
                  חברה
                </span>
              </h1>
            </div>
            <div className="flex flex-row justify-center text-center text-green-600 font-bold text-xl mt-3">
              הזדמנות להרים את השכבות החלשות ולהכיר את השכנים שלנו
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
