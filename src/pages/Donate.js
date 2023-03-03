import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GameOrBook from "../components/donations/GameOrBook";
import Clothes from "../components/donations/Clothes";

import { reset } from "../features/donation/donationSlice";

import Card from "../components/ui/Card";

import { donateOptions } from "../optionsData";

const Donate = (props) => {
  const [selectedType, setSelectedType] = useState();

  const title = props.user
    ? "שלום " + props.user.email + " מה תרצי/ה לתרום?"
    : "מה תרצו לתרום בצורה אנונימית?";
  const donatorName = props.user ? props.user.email : "anonymous";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.donation
  );

  const onSelectType = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    if (isError) {
      toast.error("תרומתך לא התקבלה עקב שגיאה ,נשמח אם תנסה שוב");
    }
    if (isSuccess) {
      toast.success("תודה על תרומתך, מקווים לראותך שוב");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card>
      <div className="max-w-[320px] h-[750x] mx-auto ">
        <h1 className="text-3xl font-bold rtl-grid  text-center">{title}</h1>

        <Select
          className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
          options={donateOptions}
          placeholder="סוג תרומה"
          value={selectedType}
          onChange={onSelectType}
          isSearchable={true}
          isRtl
        />
        {selectedType?.label === "בגדים" && (
          <Clothes type="בגדים" donatorName={donatorName} />
        )}
        {selectedType?.label === "משחק" && (
          <GameOrBook
            type={selectedType?.label}
            itemName="שם המשחק"
            categoryName="קטגוריית משחק"
          />
        )}
        {selectedType?.label === "ספר" && (
          <GameOrBook
            type={selectedType?.label}
            itemName="שם הספר"
            categoryName="קטגוריית ספר"
          />
        )}
      </div>
    </Card>
  );
};

export default Donate;
