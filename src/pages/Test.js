import React, { useState, useEffect } from "react";
import axios from "axios";
import RecycleTable from "../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/donate";

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return <RecycleTable data={data} />;
};
export default Test;