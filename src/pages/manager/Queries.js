import React, { useState, useEffect } from "react";
import axios from "axios";
import DonationsTable from "../../components/manager/table/DonationsTable";

const API_URL = "https://reropa-server.onrender.com/api/donate";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";

const Queries = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return <DonationsTable data={data} />;
};

export default Queries;
