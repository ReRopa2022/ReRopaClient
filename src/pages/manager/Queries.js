import React from "react";
import { Link } from "react-router-dom";
import { GiClothes, GiBookshelf } from "react-icons/gi";

//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";
const Queries = () => {
  return (
    <>
      <div className="text-center bg-green-500 h-48 ">
        <div className="w-full flex justify-center ">
          <h2 className=" xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
            בחר טבלה
          </h2>
        </div>
      </div>
      <div className=" bg-white w-full ">
        <div className="flex justify-around">
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <GiBookshelf className="text-green-500 text-5xl " />

              <Link
                to="/games-books"
                className="text-green-500 text-3xl font-bold"
              >
                ספרים/משחקים{" "}
              </Link>
            </button>
          </div>
          <div>
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
      </div>
    </>
  );
};

export default Queries;
