import React, { useState, useEffect } from "react";
import axios from "axios";

import RecycleTable from "../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";

const Test = (props) => {
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
      <div className="text-center bg-green-500 h-36 xs:mb-4 mb-10 ">
        <div className="w-full flex justify-center mb-2"></div>
      </div>{" "}
      <div className="mt-2">
        <RecycleTable data={data} />
      </div>
    </div>
  );
};
export default Test;
