import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/tables/Table";

const ExcessesTable = () => {
  const API_URL = "https://reropa-server.onrender.com/api/excesses";
  const [excessesData, setExcessesData] = useState();

  const fetchExcessesTable = async () => {
    axios.get(API_URL).then((response) => {
      setExcessesData(response.data);
    });
  };
  useEffect(() => {
    fetchExcessesTable();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center mt-4 text-5xl font-bold rtl-grid text-green-500">
        טבלת עודפים
      </h1>
      <div className="mt-8  align-middle">
        <Table data={excessesData} />
      </div>
    </div>
  );
};

export default ExcessesTable;
