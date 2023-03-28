import React, { useState, useEffect } from "react";
import axios from "axios";
import RecycleTable from "../../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/location";

const PointsTable = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios.get(API_URL).then((response) => {
        setData(response.data);
      });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="text-center bg-green-500 h-36 mb-10 ">
        <div className="w-full flex justify-center mb-2">
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            נקודות איסוף/מיחזור
          </h1>
        </div>
      </div>{" "}
      <div className="mt-2">
        <RecycleTable data={data} />
      </div>
    </div>
  );
};

export default PointsTable;
