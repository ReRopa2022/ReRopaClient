import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DateRangeFilter from "../../../components/manager/stats/DateRangeFilter";

const ENTRIES_STATS_URL =
  "https://reropa-server.onrender.com/api/stats/stats-entries";

const StatsEntries = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const entriesRes = await fetch(ENTRIES_STATS_URL);
      const entriesResData = await entriesRes.json();
      setData(entriesResData);
      setFilteredData(data);
    };
    fetchDatas();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pb-20">
      <h1 className="rtl-grid mt-4 flex justify-center text-5xl md:text-5x xs:text-2xl font-bold text-green-500">
        כניסות לאתר
      </h1>
      <DateRangeFilter data={data} setFilteredData={setFilteredData} />
      <ResponsiveContainer width="100%" height={400} className="pb-30">
        <BarChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="count" />
          <Tooltip />
          <Legend />
          <Bar dataKey="date" fill="#8884d8" />
          <Bar label={true} dataKey="count" fill="#B0DAFF" />
        </BarChart>
      </ResponsiveContainer>
      ;{" "}
    </div>
  );
};
export default StatsEntries;
