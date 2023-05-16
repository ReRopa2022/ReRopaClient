import React, { useState, useEffect } from "react";
import Chart from "../../../components/manager/stats/Chart";
import DateRangeFilter from "../../../components/manager/stats/DateRangeFilter";

const CLOTHES_URL = "https://reropa-server.onrender.com/api/stats/clothes";

const DONATIONS_STATS_URL =
  "https://reropa-server.onrender.com/api/stats/stats-donations";

const StatsGraphs = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const clothesRes = await fetch(CLOTHES_URL);
      const donationsRes = await fetch(DONATIONS_STATS_URL);
      const clothesResData = await clothesRes.json();
      const donationsResData = await donationsRes.json();
      setData(makeData(clothesResData, donationsResData));
      setFilteredData(data);
    };
    fetchDatas();
    // eslint-disable-next-line
  }, []);

  const makeData = (res1, res2) => {
    const data = [res1, res2];
    return data;
  };

  const combinedData = data[0]?.map((item, index) => ({
    date: data[1][index]?.date,
    dateDonation: item?.date,
    Donations: item?.count,
    Clicks: data[1][index]?.count,
  }));

  return (
    <div className="pb-20">
      <h1 className="rtl-grid mt-4 flex justify-center text-5xl md:text-5x xs:text-2xl font-bold text-green-500">
        תרומות - לחיצות על כפתור תרומה
      </h1>
      <DateRangeFilter data={combinedData} setFilteredData={setFilteredData} />
      <Chart data={filteredData} />
    </div>
  );
};
export default StatsGraphs;
