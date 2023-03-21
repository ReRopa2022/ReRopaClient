import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Select from "react-select";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GameOrBook from "../components/donations/GameOrBook";
import Clothes from "../components/donations/Clothes";

import { reset } from "../features/donation/donationSlice";

import Card from "../components/ui/Card";

import { donateOptions } from "../optionsData";
import Spinner from "../components/ui/Spinner";

const Donate = (props) => {
  const [selectedType, setSelectedType] = useState();

  const title = props.user
    ? "שלום " + props.user.email + " מה תרצי/ה לתרום?"
    : "מה תרצו לתרום בצורה אנונימית?";
  const donatorName = props.user ? props.user.email : "anonymous";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isRequired, isError, message, isLoading } = useSelector(
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
      if (!isRequired) {
        navigate("/donate-points", { state: { condition: "noNeed" } });
      } else {
        console.log(isRequired);
        toast.success("תודה על תרומתך, מקווים לראותך שוב");
        dispatch(reset());
        navigate("/donate-points");
      }
    }
    dispatch(reset());
  }, [isError, isSuccess, isRequired, message, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <Card>
        <div className="max-w-[320px] h-[750x] mx-auto flex flex-col justify-center ">
          <div className="flex justify-center">
            <Link to="/deficiencies-excesses">
              {" "}
              <button className="text-green-500 text-3xl font-bold cursor-pointer rtl-grid">
                מה יש/חסר לנו?
              </button>
            </Link>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold rtl-grid text-center">{title}</h1>
          </div>

          <Select
            className="pb-2 pt-2 my-2 bg-white-700 rounded text-gray-600  text-right"
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
              donatorName={donatorName}
              type={selectedType?.label}
              itemName="שם המשחק"
              categoryName="קטגוריית משחק"
            />
          )}
          {selectedType?.label === "ספר" && (
            <GameOrBook
              donatorName={donatorName}
              type={selectedType?.label}
              itemName="שם הספר"
              categoryName="קטגוריית ספר"
            />
          )}
        </div>
      </Card>
    </>
  );
};

export default Donate;
