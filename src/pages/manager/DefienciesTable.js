import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/tables/Table";

const DefienciesTable = () => {
  const API_URL = "https://reropa-server.onrender.com/api/request";
  const [deficiencyData, setDeficiencyData] = useState();

  const fetchDeficiencyTable = async () => {
    axios.get(API_URL).then((response) => {
      setDeficiencyData(response.data);
    });
  };
  useEffect(() => {
    fetchDeficiencyTable();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center mt-4 text-5xl font-bold rtl-grid text-green-500">
        טבלת חוסרים
      </h1>
      <div className="mt-8  align-middle">
        <Table data={deficiencyData} />
      </div>
    </div>
  );
};

export default DefienciesTable;
