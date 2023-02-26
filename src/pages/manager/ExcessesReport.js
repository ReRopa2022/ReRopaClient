import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
} from "../../optionsData";
import GreenButton from "../../components/ui/GreenButton";
import Card from "../../components/ui/Card";

const ExcessesReport = () => {
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);

  const { request, isSuccess, isError, message } = useSelector(
    (state) => state.request
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const labelExtractor = (e) => {
    return e.label;
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
    const seasons = selectedSeason.map(labelExtractor);
    const genders = selectedGender.label;
    const sectors = selectedSector.map(labelExtractor);
    const sizes = selectedSize.map(labelExtractor);

    const formNeedyData = {
      seasons,
      genders,
      sectors,
      sizes,
      quantity,
    };
  };
  useEffect(() => {
    if (isError) {
      toast.error("בקשתך לתרומה לא הצליחה, אנא נסה שוב");
    }
    if (isSuccess) {
      toast.success("בקשתך לתרומה התקבלה");
      navigate("/");
    }
  }, [isError, isSuccess, request, message, navigate, dispatch]);
  return (
    <Card>
      <h1 className="text-3xl font-bold  text-center">דיווח על עודפים</h1>
      <form className="w-full flex flex-col py-4">
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

        <GreenButton buttonName="דווח על עודף" onClickButton={onSubmit} />
      </form>
    </Card>
  );
};

export default ExcessesReport;
