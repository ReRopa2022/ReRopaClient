import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import RecycleTable from "../../components/tables/RecycleTable";
import FacebookGroupsTable from "../../components/tables/FacebookGroupsTable";
import Map from "../../components/map/Map";
//import { locationsData } from "../../data/locationsData";
import { facebookGroups } from "../../data/facebookGroups";

const API_URL = "https://reropa-server.onrender.com/api/location/users";
//For locally running const LOCALHOST_API_URL = ""http://localhost:5000/api/location/users"";

const DonatePoints = () => {
  //const [data, setData] = useState();
  const [title, setTitle] = useState(
    "נשמח שתשאיר/י את השקית באחת מנקודות המיחזור הבאות"
  );
  const [filterData, setFilterData] = useState();
  const [isNotNeed, setIsNotNeed] = useState(false);
  const location = useLocation();
  const [condition] = useState(location.state?.condition);
  //const [isDataLoaded, setIsDataLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(API_URL).then((response) => {
        //setData(response.data);
        //setIsDataLoaded(true);
        if (condition === "noNeed") {
          setFilterData(response?.data?.filter((row) => row.type === "מיחזור"));
          setIsNotNeed(true);

          //setfilterData(filterPoints);
          /* } else if (condition === "faulty") {
          const filterData = locationsData.filter((row) => row.type === "מיחזור");
    
          setfilterData(filterData);*/
        } else {
          setFilterData(
            response?.data?.filter((row) => row.type === "איסוף בגדים")
          );
          setTitle("נשמח שתשאיר/י את השקית באחת מנקודות האיסוף הבאות");
          setIsNotNeed(false);
        }
      });
    };
    fetchData();
    navigate("", { state: {} });

    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   // Use the data variable here

  //   // ...
  //   if (condition === "noNeed") {
  //     const filterData = data?.filter((row) => row.type === "מיחזור");
  //     console.log(filterData);
  //     setIsNotNeed(true);

  //     setfilterData(filterData);
  //     /* } else if (condition === "faulty") {
  //     const filterData = locationsData.filter((row) => row.type === "מיחזור");

  //     setfilterData(filterData);*/
  //   } else {
  //     const filterData = data?.filter((row) => row.type === "איסוף בגדים");
  //     console.log(filterData);
  //     setfilterData(filterData);
  //     setTitle("נשמח שתשאיר/י את השקית באחת מנקודות האיסוף הבאות");
  //     setIsNotNeed(false);
  //   }
  //   navigate("", { state: {} });

  //   // eslint-disable-next-line
  // }, []);
  return (
    <div>
      <div className="text-center bg-green-500 xs:h-12  h-36 xs:mb-4 mb-10 ">
        <div className="w-full flex justify-center mb-2">
          <h1 className="mt-4 max-w-[36rem] xl:text-5xl lg:text-4xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl xl:max-w-[43.5rem]">
            {title}
          </h1>
        </div>
      </div>{" "}
      <div className="mb-2">
        <RecycleTable data={filterData} />
        <Map points={filterData} />
      </div>
      {isNotNeed && (
        <>
          <div className="text-center bg-green-500 xs:h-12 h-36 xs:mb-4 mb-10 ">
            <div className="w-full flex justify-center mb-2">
              <h1 className="mt-4 max-w-[36rem] xl:text-5xl lg:text-4xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl xl:max-w-[43.5rem]">
                או להצטרף לאחת מהקבוצות הבאות{" "}
              </h1>
            </div>
          </div>{" "}
          <FacebookGroupsTable data={facebookGroups} />
        </>
      )}
    </div>
  );
};
export default DonatePoints;