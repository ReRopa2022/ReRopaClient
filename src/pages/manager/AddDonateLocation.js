import React, { useState, useEffect } from "react";
//import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { donate, reset } from "../../features/donation/donationSlice";

/**
  const [selectedCity, setSelectedCity] = useState();
  const [selectedStreet, setSelectedStreet] = useState();
  const [selectedStreetNumber, setSelectedStreetNumber] = useState();
  const [selectedInfo, setSelectedInfo] = useState();
  
  const [selectedType, setSelectedType] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
   */

const DonateLocation = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [selectedStreet, setSelectedStreet] = useState();
  const [selectedStreetNumber, setSelectedStreetNumber] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedInfo, setSelectedInfo] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { donation, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.donation
  );

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectCity = (e) => {
    setSelectedCity(e.target.value);
  };

  const onSelectStreet = (e) => {
    setSelectedStreet(e.target.value);
  };

  const onSelectStreetNumber = (e) => {
    setSelectedStreetNumber(e.target.value);
  };
  const onSelectType = (e) => {
    setSelectedType(e.target.value);
  };

  const onSelectInfo = (e) => {
    setSelectedInfo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const cities = selectedCity.map(labelExtractor);
    const streets = selectedStreet.map(labelExtractor);
    const streetNumbers = selectedStreetNumber.map(labelExtractor);
    const infos = selectedInfo.map(labelExtractor);

    const donationLocationData = {
      city: cities,
      street: streets,
      streetNumber: streetNumbers,
      info: infos,
    };

    dispatch(donate(donationLocationData));
    dispatch(reset());
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      alert("Thank you for donation ,hope to see you again. ");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, donation, message, navigate, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="w-full h-screen mb-3">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-18 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px]  mx-auto ">
            <h1 className="text-3xl font-bold  text-center">
              הוספת נקודת איסוף חדשה
            </h1>

            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="עיר"
                type="text"
                value={selectedCity}
                onChange={onSelectCity}
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="רחוב"
                type="text"
                value={selectedStreet}
                onChange={onSelectStreet}
              />
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מספר רחוב"
                type="text"
                value={selectedStreetNumber}
                onChange={onSelectStreetNumber}
              />
              <select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right rtl-grid "
                placeholder="סוג נקודה"
                type="text"
                value={selectedType}
                onChange={onSelectType}
              >
                <option>איסוף בגדים</option>
                <option>מיחזור</option>
              </select>
              <input
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                placeholder="מידע"
                type="text"
                value={selectedInfo}
                style={{ height: "100px" }}
                onChange={onSelectInfo}
              />

              <button
                onClick={onSubmit}
                className="bg-green-500 py-3 my-6 rounded font-bold"
              >
                הוספה
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateLocation;
