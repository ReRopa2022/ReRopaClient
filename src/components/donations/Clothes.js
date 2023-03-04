import React, { useState } from "react";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ImageUploader from "../ImageUploader";
import GreenButton from "../ui/GreenButton";

import { donate, reset } from "../../features/donation/donationSlice";
import {
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
  donateCondition,
} from "../../optionsData";

const Clothes = (props) => {
  const [selectedCondition, setSelectedCondition] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectedCondition = (data) => {
    if (data.label === "בלוי") {
      const isNotForDonate = prompt(
        "תורם יקר, האם ברצונך למסור בגדים בלויים? אנא השב כן או לא"
      );
      if (isNotForDonate === "כן") {
        dispatch(reset());
        navigate("/no-donate");
      } else {
        setSelectedCondition("");
      }
    } else {
      setSelectedCondition(data.label);
    }
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

  const onSubmit = (e) => {
    e.preventDefault();

    const seasons = selectedSeason?.map(labelExtractor);
    const genders = selectedGender?.label;
    const sectors = selectedSector?.map(labelExtractor);
    const sizes = selectedSize?.map(labelExtractor);

    const donationData = {
      user: props.donatorName,
      types: props.type,
      condition: selectedCondition ? selectedCondition : null,
      seasons,
      genders,
      sectors,
      sizes,
      quantity,
      image,
    };
    console.log(donationData);
    dispatch(donate(donationData));
  };

  return (
    <form className="w-full flex flex-col py-4">
      <Select
        className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
        options={donateCondition}
        placeholder="מצב הבגדים"
        isSearchable={true}
        onChange={onSelectedCondition}
        isRtl
      />
      <Select
        className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
        options={seasonOptions}
        placeholder="עונה"
        value={selectedSeason}
        onChange={onSelectSeason}
        isSearchable={true}
        isMulti
        isRtl
      />
      <Select
        className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
        options={genderOptions}
        placeholder="מגדר"
        value={selectedGender}
        onChange={onSelectGender}
        isSearchable={true}
        isRtl
      />
      <Select
        className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
        options={sectorOptions}
        placeholder="מגזר"
        value={selectedSector}
        onChange={onSelectSector}
        isSearchable={true}
        isMulti
        isRtl
      />

      <Select
        className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
        options={sizeOptions}
        placeholder="גיל/מידה"
        value={selectedSize}
        onChange={onSelectSize}
        isSearchable={true}
        isMulti
        isRtl
      />

      <input
        className="rtl-grid p-3 my-2 bg-white-700 rounded text-gray-600  text-right flex flex-row-reverse"
        type="number"
        min={1}
        value={quantity}
        placeholder="כמות בגדים"
        onChange={onSelectQuantity}
      />
      <ImageUploader image={image} setImage={setImage} />
      <GreenButton buttonName="תרום" onClickButton={onSubmit} />
    </form>
  );
};

export default Clothes;
