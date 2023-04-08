import React, { useState, useEffect } from "react";
//import axios from "axios";
import Chart from "../../../components/manager/stats/Chart";

const API_URL = "https://reropa-server.onrender.com/api/stats/clothes";

const StatsGraphs = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      //console.log(data);
      setdata(data);
    };
    fetchDatas();
  }, []);
  return (
    <div>
      <Chart data={data} />
    </div>
  );
};

export default StatsGraphs;
