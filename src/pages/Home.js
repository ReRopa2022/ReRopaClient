import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEnvira, FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import Table from "../components/tables/Table";

const Home = () => {
  const API_URL = "https://reropa-server.onrender.com/api/";
  const [deficiencyData, setDeficiencyData] = useState();
  const [excessesData, setExcessesData] = useState();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

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
    if (user?.isManager) {
      navigate("/manager-home");
      return;
    }
    fetchDeficiencyTable();
    fetchExcessesTable();
  }, [navigate, user?.isManager]);
  return (
    <>
      <div className="text-center bg-green-500 h-48 ">
        <div className="w-full flex justify-center ">
          <h1 className="mt-4 max-w-[36rem] xl:text-6xl lg:text-5xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl xl:max-w-[43.5rem]">
            ReRopa ברוכים הבאים ל
          </h1>
        </div>
        <div className="w-full flex justify-center mt-7">
          <h2 className="mt-4 xl:text-5xl lg:text-3xl font-light tracking-tight text-white sm:text-2xl md:text-2xl xl:max-w-[43.5rem]">
            הכי חשוב - זה חינוכי
          </h2>
        </div>
      </div>
      <div className=" bg-white w-full mt-6">
        <div className="flex justify-around">
          <div className="flex justify-center">
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <FaEnvira className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">סביבה</h1>
            </button>
          </div>
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <GiReceiveMoney className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">חיסכון</h1>
            </button>
          </div>
          <div>
            <button className="flex justify-center rounded-full px-5 py-5 shadow-md">
              <FaHandsHelping className="text-green-500 text-5xl " />
              <h1 className="text-green-500 text-3xl font-bold">חברה</h1>
            </button>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Home;
