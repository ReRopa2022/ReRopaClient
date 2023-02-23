import React, { useState, useEffect } from "react";
import axios from "axios";
import GreenButton from "../../components/ui/GreenButton";

const API_URL = "https://reropaserver.azurewebsites.net/api/donate";
//For locally running
const LOCALHOST_API_URL = "http://localhost:5000/api/donate";

const Queries = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(LOCALHOST_API_URL).then((response) => {
      setData(response.data[0]);
    });
  });
  return (
    <div>
      {JSON.stringify(data)}
      <GreenButton onClickButton={props.onClickHide} buttonName="חזור" />
    </div>
  );
};

export default Queries;
