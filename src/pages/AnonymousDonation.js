import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GreenButton from "../components/ui/GreenButton";
import { donate, reset } from "../features/donation/donationSlice";
import Card from "../components/ui/Card";
import ImageUploader from "../components/ImageUploader";

import {
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
  donateOptions,
  donateCondition,
} from "../optionsData";

const AnonymousDonation = (props) => {
  const [selectedType, setSelectedType] = useState();
  const [selectedCondition, setSelectedCondition] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.donation
  );

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectType = (data) => {
    setSelectedType(data);
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

    const types = selectedType.label;
    const seasons = selectedSeason.map(labelExtractor);
    const genders = selectedGender.label;
    const sectors = selectedSector.map(labelExtractor);
    const sizes = selectedSize.map(labelExtractor);

    const donationData = {
      user: "anonymous",
      types,
      condition: selectedCondition,
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
        <h1 className="text-3xl font-bold  text-center">תרומה אנונימית</h1>

        <form className="w-full flex flex-col py-4">
          <Select
            className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
            options={donateOptions}
            placeholder="סוג תרומה"
            value={selectedType}
            onChange={onSelectType}
            isSearchable={true}
            isRtl
          />
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
      </div>
    </Card>
  );
};

export default AnonymousDonation;
