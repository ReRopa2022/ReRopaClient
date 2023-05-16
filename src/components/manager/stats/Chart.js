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
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey={"Clicks"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="date" fill="#8884d8" />
          <Bar label={true} dataKey="Donations" fill="#82ca9d" />
          <Bar label={true} dataKey="Clicks" fill="#F7D060" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
