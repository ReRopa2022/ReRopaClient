import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import RecycleTable from "../components/tables/RecycleTable";

const API_URL = "https://reropa-server.onrender.com/api/location";
//For locally running const LOCALHOST_API_URL = "http://localhost:5000/api/location";

const DonatePoints = () => {
  const [data, setData] = useState();
  const [title, setTitle] = useState("תורם יקר תודה רבה על נכונותך");
  const [message, setMessage] = useState("");
  const [filterTable, setFilterTable] = useState();
  const location = useLocation();
  const [condition] = useState(location.state?.condition);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios.get(API_URL).then((response) => {
        setData(response.data);
        setIsDataLoaded(true);
      });
      console.log(condition);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      // Use the data variable here
      console.log(data);
      // ...
      if (condition === "noNeed") {
        setMessage(
          "העמותה לא צריכה את הבגדים שביקשת לתרום כרגע, נשמח שתשים את תרומתך באחת מנקודות המיחזור הבאות"
        );
        const filterData = data?.filter((row) => row.type === "מיחזור");

        setFilterTable(filterData);
      } else if (condition === "faulty") {
        setMessage(
          "העמותה לא צריכה בגדים בלויים, נשמח שתשים את תרומתך באחת מנקודות המיחזור הבאות"
        );
        const filterData = data?.filter((row) => row.type === "מיחזור");

        setFilterTable(filterData);
      } else {
        const filterData = data?.filter((row) => row.type === "איסוף בגדים");
        setFilterTable(filterData);
        setTitle("תורם יקר, תודה רבה על תרומתך");
        setMessage("נשמח שתשים את השקית באחת מנקודות האיסוף הבאות");
      }
    }
    // eslint-disable-next-line
  }, [isDataLoaded]);
  return (
    <div>
      <div className="text-center bg-green-500 h-56 mb-10 ">
        <div className="w-full flex justify-center mb-2">
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            {title}
          </h1>
        </div>
        <div className="w-full text-center rtl-grid ">
          <p className=" xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-full">
            {message}
          </p>
        </div>
      </div>{" "}
      <div className="mt-2">
        <RecycleTable data={filterTable} />
      </div>
    </div>
  );
};
export default DonatePoints;
