import React, { useState } from "react";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import ImageUploader from "../ImageUploader";
import GreenButton from "../ui/GreenButton";

import { donate } from "../../features/donation/donationSlice";
import {
  sizeOptions,
  //sectorOptions,
  genderOptions,
  seasonOptions,
  donateCondition,
} from "../../data/optionsData";

const Clothes = (props) => {
  const [selectedCondition, setSelectedCondition] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  //const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  //const [image, setImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectedCondition = (data) => {
    /*if (data.label === "בלוי") {
      dispatch(reset());
      navigate("/donate-points", { state: { condition: "faulty" } });*/

    setSelectedCondition(data.label);
  };
  const onSelectSeason = (data) => {
    setSelectedSeason(data);
  };
  const onSelectGender = (data) => {
    setSelectedGender(data);
  };
  /*const onSelectSector = (data) => {
    setSelectedSector(data);
  };*/
  const onSelectSize = (data) => {
    setSelectedSize(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedCondition === "משומש") {
      return navigate("/donate-points", { state: { condition: "noNeed" } });
    }

    const seasons = selectedSeason?.label;
    const genders = selectedGender?.label;
    //const sectors = selectedSector?.map(labelExtractor);
    const sizes = selectedSize?.map(labelExtractor);

    const donationData = {
      user: props.donatorName,
      types: props.type,
      condition: selectedCondition ? selectedCondition : null,
      seasons,
      genders,
      //sectors,
      sizes,
      status: "לא עודכן סטטוס",
      //image,
    };
    dispatch(donate(donationData));
  };

  return (
    <form className="w-full flex flex-col">
      <div className="w-full  ">
        <Select
          className="p-3  bg-white-700 rounded text-gray-600  text-right"
          options={donateCondition}
          placeholder="מצב הבגדים"
          isSearchable={true}
          onChange={onSelectedCondition}
          isRtl
        />
      </div>
      <div className="w-full  ">
        <Select
          className="p-3 bg-white-700 rounded text-gray-600  text-right"
          options={seasonOptions}
          placeholder="עונה"
          value={selectedSeason}
          onChange={onSelectSeason}
          isSearchable={true}
          isRtl
        />
      </div>
      <div className="w-full  ">
        <Select
          className="p-3  bg-white-700 rounded text-gray-600  text-right"
          options={genderOptions}
          placeholder="מגדר"
          value={selectedGender}
          onChange={onSelectGender}
          isSearchable={true}
          isRtl
        />
        {selectedGender?.label === "אחר" && (
          <p className="p-3  rounded text-red-600  text-center">
            אחר מתייחס לשאר האפשרויות הקיימות לדוגמא: בגד שמתאים לזכר ולנקבה
          </p>
        )}
      </div>
      {/*<div className="w-full  ">
        <Select
          className="p-3  bg-white-700 rounded text-gray-600  text-right"
          options={sectorOptions}
          placeholder="מגזר"
          value={selectedSector}
          onChange={onSelectSector}
          isSearchable={true}
          isMulti
          isRtl
        />
      </div>*/}
      <div className="w-full  ">
        <Select
          className="p-3  bg-white-700 rounded text-gray-600  text-right"
          options={sizeOptions}
          placeholder="גיל/מידה"
          value={selectedSize}
          onChange={onSelectSize}
          isSearchable={true}
          isMulti
          isRtl
        />
      </div>

      <div className="rtl-grid flex flex-row justify-evenly ">
        {/*selectedCondition === "חדש" && (
          <div className=" w-[60%] ">
            <ImageUploader setImage={setImage} />
          </div>
        )*/}
        <div className=" grid grid-rows-1 gap-1 place-items-center ">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/assets/SohamWarehouse.jfif"}
            alt="condition"
            height={300}
            width={300}
          />

          <GreenButton buttonName="לתרומה" onClickButton={onSubmit} />
        </div>
      </div>
    </form>
  );
};

export default Clothes;
