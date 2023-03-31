import React from "react";
import { Link } from "react-router-dom";
import { GiClothes, GiBookshelf, GiFullFolder } from "react-icons/gi";
import { FaHands, FaDumpster } from "react-icons/fa";

//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";
const Queries = () => {
  return (
    <>
      <div className="text-center bg-green-500 h-[40%] ">
        <div className="w-full flex justify-center ">
          <h2 className=" text-5xl py-10 font-bold text-white">בחר טבלה</h2>
        </div>
      </div>
      <div className=" bg-white w-full  ">
        <div className="flex flex-row items-center justify-evenly flex-wrap pb-5">
          <div>
            <div className="w-full flex justify-center   ">
              <h2 className="text-5xl pt-6 pb-5 font-bold text-green-600">
                תרומות
              </h2>
            </div>
            <div className="flex flex-col ">
              <button className="flex  rounded-full px-5 py-5 shadow-md">
                <GiBookshelf className="text-green-500 text-5xl " />
                <Link
                  /*to="/games-books"*/
                  className="disabled-link text-green-500 text-3xl font-bold"
                >
                  ספרים/משחקים{" "}
                </Link>
              </button>
            </div>
            <div className="flex flex-col">
              <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
                <GiClothes className="text-green-500 text-5xl " />
                <Link
                  to="/clothes-table"
                  className="text-green-500 text-3xl font-bold"
                >
                  בגדים
                </Link>
              </button>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center ">
              <h2 className=" text-5xl pt-6 pb-5  font-bold text-green-600">
                מידע אחסון
              </h2>
            </div>
            <div className="flex flex-col">
              <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
                <GiFullFolder className="text-green-500 text-5xl " />
                <Link
                  to="/excesses-table"
                  //to="/deficiencies-excesses"
                  className="text-green-500 text-3xl font-bold"
                >
                  עודפים
                </Link>
              </button>
            </div>

            <div className="flex flex-col">
              <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
                <FaHands className="text-green-500 text-5xl pr-1 " />
                <Link
                  to="/defiencies-table"
                  className="text-green-500 text-3xl font-bold"
                >
                  חוסרים
                </Link>
              </button>
            </div>
            <div className="flex flex-col">
              <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
                <FaDumpster className="text-green-500 text-5xl pr-1 " />
                <Link
                  to="/locataions-table"
                  className="text-green-500 text-3xl font-bold"
                >
                  נקודות איסוף/מיחזור
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Queries;
