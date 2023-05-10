import React from "react";
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

const Chart = ({ data }) => {
  const combinedData = data[0]?.map((item, index) => ({
    Date: data[2][index]?.date,
    dateDonation: item?.date,
    Donations: item?.count,
    Clicks: data[2][index]?.count,
  }));

  const entriesData = data[1]?.map((item) => ({
    date: item?.date,
    Entries: item?.count,
  }));
  return (
    <>
      <h1 className="rtl-grid mt-4 flex justify-center text-5xl md:text-5x xs:text-2xl font-bold text-green-500">
        תרומות - לחיצות על כפתור תרומה
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={combinedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis dataKey={"Clicks"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Date" fill="#8884d8" />
          <Bar label={true} dataKey="Donations" fill="#82ca9d" />
          <Bar label={true} dataKey="Clicks" fill="#F7D060" />
        </BarChart>
      </ResponsiveContainer>

      <h1 className="rtl-grid mt-4 flex justify-center text-5xl md:text-5x xs:text-2xl font-bold text-green-500">
        כניסות לאתר
      </h1>
      <ResponsiveContainer width="100%" height={400} className="pb-30">
        <BarChart
          data={entriesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="Entries" />
          <Tooltip />
          <Legend />
          <Bar dataKey="date" fill="#8884d8" />
          <Bar label={true} dataKey="Entries" fill="#B0DAFF" />
        </BarChart>
      </ResponsiveContainer>
      <h1 className="text-white">statistics</h1>
      <h1 className="text-white">statistics</h1>
      <h1 className="text-white">statistics</h1>
      <h1 className="text-white">statistics</h1>
    </>
  );
};

export default Chart;
