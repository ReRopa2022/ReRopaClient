import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Select from "react-select";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import GameOrBook from "../components/donations/GameOrBook";
import Clothes from "../components/donations/Clothes";
import Spinner from "../components/ui/Spinner";

import { reset } from "../features/donation/donationSlice";

import Card from "../components/ui/Card";

import { donateOptions } from "../optionsData";

const Donate = (props) => {
  const [selectedType, setSelectedType] = useState();
  const [isImageShown, setIsImageShown] = useState(false);

  const title = props.user
    ? "שלום " + props.user.email + " מה תרצי/ה לתרום?"
    : "מה תרצה/י לתרום?";
  const donatorName = props.user ? props.user.email : "anonymous";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isRequired, isError, message, isLoading } = useSelector(
    (state) => state.donation
  );

  const onOpenImage = () => {
    setIsImageShown(true);
  };
  const onCloseImage = () => {
    setIsImageShown(false);
  };

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
        toast.success("תודה על תרומתך, מקווים לראותך שוב");
        dispatch(reset());
        navigate("/donate-points");
      }
    }
    dispatch(reset());
  }, [isError, isSuccess, isRequired, message, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center pt-55">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div>
        {isImageShown && (
          <div className=" grid grid-rows-1 gap-4 place-items-center bg-green-100">
            <img
              className=""
              src={process.env.PUBLIC_URL + "/assets/BlauUsedNew.jfif"}
              alt="condition"
              height={350}
              width={500}
            />
            <button onClick={onCloseImage}>
              <span className="text-red-600 font-bold  z-50">
                להסתרת התמונה
              </span>
            </button>
          </div>
        )}
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
              <h1 className="text-3xl font-bold rtl-grid text-center">
                {title}
              </h1>
            </div>
            <button onClick={onOpenImage}>
              <span className="text-green-500">הכוונה למצב בגדים</span>
            </button>

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
            {/*selectedType?.label === "ספר" && (
            <GameOrBook
              donatorName={donatorName}
              type={selectedType?.label}
              itemName="שם הספר"
              categoryName="קטגוריית ספר"
            />
          )*/}
            {/*selectedType?.label === "משחק" && (
            <GameOrBook
              donatorName={donatorName}
              type={selectedType?.label}
              itemName="שם המשחק"
              categoryName="קטגוריית משחק"
            />
)*/}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Donate;
