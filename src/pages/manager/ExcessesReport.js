import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  excessReport,
  reset,
} from "../../features/manager/donationExcessesSlice";
import {
  organizationOptions,
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
} from "../../data/optionsData";
import GreenButton from "../../components/ui/GreenButton";
import Card from "../../components/ui/Card";

const ExcessesReport = () => {
  const [selectedOrganization, setSelectedOrganization] = useState();
  const [selectedSeason, setSelectedSeason] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedSector, setSelectedSector] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);

  const { isSuccess, isError, message } = useSelector((state) => state.report);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const labelExtractor = (e) => {
    return e.label;
  };

  const onSelectOrganization = (data) => {
    setSelectedOrganization(data);
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
    const organization = selectedOrganization.label;
    const seasons = selectedSeason.map(labelExtractor);
    const genders = selectedGender.label;
    const sectors = selectedSector.map(labelExtractor);
    const sizes = selectedSize.map(labelExtractor);
    const formNeedyData = {
      organization,
      seasons,
      genders,
      sectors,
      sizes,
      quantity,
    };
    console.log(formNeedyData);
    dispatch(excessReport(formNeedyData));
    dispatch(reset());
  };
  useEffect(() => {
    if (isError) {
      toast.error("דיווח על עודפים לא הצליח, אנא נסה שוב");
    }
    if (isSuccess) {
      toast.success("דיווח על עודפים הצליח");
      navigate("/manager-home");
    }
  }, [isError, isSuccess, message, navigate, dispatch]);
  return (
    <Card>
      <div className="max-w-[320px] h-full mx-auto py-10 ">
        <h1 className="text-3xl pt-3 font-bold  text-center">
          דיווח על עודפים
        </h1>
        <form className="w-full flex flex-col py-4">
          <Select
            className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
            options={organizationOptions}
            placeholder="ארגון"
            value={selectedOrganization}
            onChange={onSelectOrganization}
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
            className="rtl-grid p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
            type="number"
            min={1}
            value={quantity}
            placeholder="כמות בגדים"
            onChange={onSelectQuantity}
          />

          <GreenButton buttonName="דווח על עודפים" onClickButton={onSubmit} />
        </form>
      </div>
    </Card>
  );
};

export default ExcessesReport;
