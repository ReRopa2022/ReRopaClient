import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { donate, reset } from "../features/donation/donationSlice";

import {
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
  donateOptions,
} from "../optionsData";

const Donate = () => {
  const [selectedType, setSelectedType] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { donation, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.donation
  );
  const { user } = useSelector((state) => state.auth);

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectType = (data) => {
    setSelectedType(data);
  };

  const onSelectSeason = (data) => {
    setSelectedSeason(data);
  };
  const onSelectGender = (data) => {
    setSelectedGender(data);
  };
  const onSelectSector = (data) => {
    setSelectedSector(data);
  };
  const onSelectSize = (data) => {
    setSelectedSize(data);
  };
  const onSelectQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const onSelectImage = (e) => {
    setImage(e.target.file);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const u_email = user.email;
    const types = selectedType.map(labelExtractor);
    const seasons = selectedSeason.map(labelExtractor);
    const genders = selectedGender.map(labelExtractor);
    const sectors = selectedSector.map(labelExtractor);
    const sizes = selectedSize.map(labelExtractor);

    const donationData = {
      user: u_email,
      types,
      seasons,
      genders,
      sectors,
      sizes,
      quantity,
      image,
    };

    dispatch(donate(donationData));
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
            <h1 className="text-3xl font-bold  text-center">תרומה</h1>

            <form className="w-full flex flex-col py-4">
              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={donateOptions}
                placeholder="סוג תרומה"
                value={selectedType}
                onChange={onSelectType}
                isSearchable={true}
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={seasonOptions}
                placeholder="עונה"
                value={selectedSeason}
                onChange={onSelectSeason}
                isSearchable={true}
                isMulti
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={genderOptions}
                placeholder="מגדר"
                value={selectedGender}
                onChange={onSelectGender}
                isSearchable={true}
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={sectorOptions}
                placeholder="מגזר"
                value={selectedSector}
                onChange={onSelectSector}
                isSearchable={true}
                isMulti
                isRtl
              />

              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={sizeOptions}
                placeholder="גיל/מידה"
                value={selectedSize}
                onChange={onSelectSize}
                isSearchable={true}
                isMulti
                isRtl
              />

              <input
                className="rtl-grid p-3 my-2 bg-white-700 rouded text-gray-600  text-right flex flex-row-reverse"
                type="number"
                min={1}
                value={quantity}
                placeholder="כמות בגדים"
                onChange={onSelectQuantity}
              />
              <label className="text-right" htmlFor="bag-image">
                העלה תמונה
              </label>
              <input
                className="p-3 ml-10 my-2 bg-white-700 rouded text-gray-600  text-right"
                id="bag-image"
                type="file"
                value={image}
                single
                accept="image/*"
                onChange={onSelectImage}
              />
              <button
                onClick={onSubmit}
                className="bg-green-500 py-3 my-6 rounded font-bold"
              >
                תרום
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
