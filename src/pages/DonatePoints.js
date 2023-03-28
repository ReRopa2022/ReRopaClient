import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import RecycleTable from "../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/location";

const DonatePoints = () => {
  const [data, setData] = useState();
  const [title, setTitle] = useState(
    "נשמח שתשאיר/י את השקית באחת מנקודות המיחזור הבאות"
  );
  const [filterTable, setFilterTable] = useState();
  const location = useLocation();
  const [condition] = useState(location.state?.condition);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      axios.get(API_URL).then((response) => {
        setData(response.data);
        setIsDataLoaded(true);
      });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      // Use the data variable here

      // ...
      if (condition === "noNeed") {
        const filterData = data?.filter((row) => row.type === "מיחזור");

        setFilterTable(filterData);
      } else if (condition === "faulty") {
        const filterData = data?.filter((row) => row.type === "מיחזור");

        setFilterTable(filterData);
      } else {
        const filterData = data?.filter((row) => row.type === "איסוף בגדים");
        setFilterTable(filterData);
        setTitle("נשמח שתשאיר/י את השקית באחת מנקודות האיסוף הבאות");
      }
      navigate("", { state: {} });
    }
    // eslint-disable-next-line
  }, [isDataLoaded]);
  return (
    <div>
      <div className="text-center bg-green-500 h-36 mb-10 ">
        <div className="w-full flex justify-center mb-2">
          <h1 className="mt-4 max-w-[36rem] xl:text-5xl lg:text-4xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl xl:max-w-[43.5rem]">
            {title}
          </h1>
        </div>
      </div>{" "}
      <div className="mt-2">
        <RecycleTable data={filterTable} />
      </div>
    </div>
  );
};
export default DonatePoints;
