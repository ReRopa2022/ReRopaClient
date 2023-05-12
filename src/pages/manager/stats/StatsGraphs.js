import React, { useState, useEffect } from "react";
//import axios from "axios";
import Chart from "../../../components/manager/stats/Chart";
//import DateRangeFilter from "../../../components/manager/stats/DateRangeFilter";

const CLOTHES_URL = "https://reropa-server.onrender.com/api/stats/clothes";
const ENTRIES_STATS_URL =
  "https://reropa-server.onrender.com/api/stats/stats-entries";
const DONATIONS_STATS_URL =
  "https://reropa-server.onrender.com/api/stats/stats-donations";

const StatsGraphs = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const clothesRes = await fetch(CLOTHES_URL);
      const entriesRes = await fetch(ENTRIES_STATS_URL);
      const donationsRes = await fetch(DONATIONS_STATS_URL);
      const clothesResData = await clothesRes.json();
      const entriesResData = await entriesRes.json();
      const donationsResData = await donationsRes.json();
      setData(makeData(clothesResData, entriesResData, donationsResData));
      setFilteredData(data);
    };
    fetchDatas();
  }, [data]);

  const makeData = (res1, res2, res3) => {
    const data = [res1, res2, res3];
    return data;
  };
  return (
    <div>
      {/* <DateRangeFilter data={data} setFilteredData={setFilteredData} /> */}
      <Chart data={filteredData} />
    </div>
  );
};
export default StatsGraphs;
