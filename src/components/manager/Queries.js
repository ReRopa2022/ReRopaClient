import React, { useState, useEffect } from "react";
import axios from "axios";
import GreenButton from "../ui/GreenButton";

const Queries = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://reropaserver.azurewebsites.net/api/donate")
      .then((response) => {
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
