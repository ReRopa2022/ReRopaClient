import React, { useState, useEffect } from "react";
import axios from "axios";
import RecycleTable from "../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/location";

const NoNeedDonate = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <div className="text-center bg-green-500 h-56 mb-10 ">
        <div className="w-full flex justify-center mb-2">
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            תורם יקר תודה רבה על נכונותך
          </h1>
        </div>
        <div className="w-full text-center rtl-grid ">
          <p className=" xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-full">
            העמותה לא צריכה בגדים בלויים, נשמח שתשים את השקית באחת מנקודות
            המיחזור הבאות
          </p>
        </div>
      </div>{" "}
      <div className="mt-2">
        <RecycleTable data={data} />
      </div>
    </div>
  );
};
export default NoNeedDonate;
