import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/tables/Table";

const DefienciesExcesses = () => {
  const API_URL = "https://reropa-server.onrender.com/api/";
  const [deficiencyData, setDeficiencyData] = useState();
  const [excessesData, setExcessesData] = useState();

  const fetchDeficiencyTable = async () => {
    axios.get(API_URL + "request").then((response) => {
      setDeficiencyData(response.data);
    });
  };
  const fetchExcessesTable = async () => {
    axios.get(API_URL + "excesses").then((response) => {
      setExcessesData(response.data);
    });
  };
  useEffect(() => {
    fetchDeficiencyTable();
    fetchExcessesTable();
  }, []);

  return (
    <div>
      <h1 className="mt-4 xl:text-5xl lg:text-3xl  font-light tracking-tight rtl-grid text-green-500 sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
        טבלאות
      </h1>
      <div className="mt-8  align-middle">
        <h2 className="mt-4 xl:text-5xl lg:text-3xl  font-light tracking-tight rtl-grid text-green-500 sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
          מה חסר לנו?{" "}
        </h2>

        <Table data={deficiencyData} />
      </div>
      <div className="mt-8  align-middle">
        <h2 className="mt-4 xl:text-5xl lg:text-3xl  font-light tracking-tight rtl-grid text-green-500 sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
          מה אנחנו לא צריכים?
        </h2>

        <Table data={excessesData} />
      </div>
    </div>
  );
};

export default DefienciesExcesses;
