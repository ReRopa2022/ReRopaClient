import React, { useState, useEffect } from "react";
import axios from "axios";
import DonationsTable from "../../components/manager/table/DonationsTable";
import TableFilter from "../../components/manager/table/TableFilter";

const API_URL = "https://reropa-server.onrender.com/api/donate";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";
const Queries = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      setSearchData(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <TableFilter data={data} setSearchData={setSearchData} />
        <DonationsTable data={searchData} />
      </div>
    </div>
  );
};

export default Queries;
