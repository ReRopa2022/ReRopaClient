import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import GreenButton from "../../components/ui/GreenButton";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import GameOrBook from "../components/donations/GameOrBook";
import Clothes from "../../components/donations/Clothes";
import Spinner from "../../components/ui/Spinner";
import { reset } from "../../features/donation/donationSlice";
import Card from "../../components/ui/Card";
import ImageOverlay from "../../components/donations/ImageOverlay";
import { donateOptions } from "../../data/optionsData";
import { TbShirtOff } from "react-icons/tb";
import { SlCheck } from "react-icons/sl";

const Donate = (props) => {
  const [selectedType, setSelectedType] = useState();
  const [showOverlay, setShowOverlay] = useState(false);

  const title = props.user
    ? "שלום " + props.user.email + " מה תרצי/ה לתרום?"
    : "מה תרצה/י לתרום?";
  const toDonate = "בגדים במצב חדש (עם טיקט או שנלבש עד 5 פעמים)";
  const toRecycle =
    "בגדים במצב משומש (בגדים שנלבשו מעל 5 פעמים/קרועים/מכותמים/מרופטים/עם גולגולים)";

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
      toast.success("תודה על תרומתך, מקווים לראותך שוב");
      dispatch(reset());
      return navigate("/donate-points");
    }
    dispatch(reset());
  }, [isError, isSuccess, isRequired, message, navigate, dispatch]);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

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
        {/* <div className=" grid grid-rows-1 gap-4 place-items-center bg-green-100">
          <img
            className="xs:w-[75%]"
            src={process.env.PUBLIC_URL + "/assets/BlauUsedNew.jfif"}
            alt="condition"
            height={600}
            width={800}
          />
        </div> */}
        <div className="flex flex-col font-bold rtl-grid text-center items-center bg-green-100 ">
          <div className="flex w-[75%] flex-col text-right">
            <div className="text-green-600 text-5xl pb-5">מה לתרום?</div>
            <div className="flex align-middle text-green-500 text-2xl">
              <SlCheck className="text-green-500 text-4xl pl-3" /> {toDonate}
            </div>
            <div className="flex align-middle text-red-500 text-2xl">
              <TbShirtOff className="text-red-500 text-4xl pl-3" /> {toRecycle}
            </div>
            <div className="w-[25%]">
              <GreenButton
                buttonName="תמונה להמחשה"
                onClickButton={handleButtonClick}
              />
            </div>
          </div>
        </div>
        {showOverlay && (
          <ImageOverlay
            imageUrl={process.env.PUBLIC_URL + "/assets/BlauUsedNew.jfif"}
            onClose={handleCloseOverlay}
          />
        )}

        <Card>
          <div className="max-w-[320px] h-[750x] mx-auto flex flex-col justify-center ">
            <div className="flex justify-center">
              <Link to="/deficiencies-excesses">
                {" "}
                <button className="hidden text-green-500 text-3xl font-bold cursor-pointer rtl-grid">
                  מה יש/חסר לנו?
                </button>
              </Link>
            </div>
            <div className="w-full">
              <h1 className="text-3xl font-bold rtl-grid text-center">
                {title}
              </h1>
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
