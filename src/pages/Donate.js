import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GreenButton from "../components/ui/GreenButton";
import { donate, reset } from "../features/donation/donationSlice";
import Deficiency from "../components/Deficiency";
import Card from "../components/ui/Card";
import ImageUploader from "../components/ImageUploader";

import {
  sizeOptions,
  sectorOptions,
  genderOptions,
  seasonOptions,
  donateOptions,
} from "../optionsData";

const Donate = (props) => {
  const [deficiencyIsShown, setDeficiencyIsShown] = useState(false);

  const showDeficiencyHandler = () => {
    setDeficiencyIsShown(true);
  };

  const hideDeficiencyHandler = () => {
    setDeficiencyIsShown(false);
  };
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

  const onSubmit = (e) => {
    e.preventDefault();

    const types = selectedType.label;
    const seasons = selectedSeason.map(labelExtractor);
    const genders = selectedGender.label;
    const sectors = selectedSector.map(labelExtractor);
    const sizes = selectedSize.map(labelExtractor);

    const donationData = {
      user: props.user.email,
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
      toast.error("???????????? ???? ???????????? ?????? ?????????? ,???????? ???? ???????? ??????");
    }
    if (isSuccess) {
      toast.success("???????? ???? ????????????, ???????????? ???????????? ??????");
      navigate("/");
    }
    dispatch(reset());
  }, [
    isError,
    isSuccess,
    donation,
    message,
    navigate,
    dispatch,
    deficiencyIsShown,
  ]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card>
      <div className="max-w-[320px] h-[750x] mx-auto ">
        {deficiencyIsShown ? (
          <Deficiency onHideHandler={hideDeficiencyHandler} />
        ) : (
          <React.Fragment>
            <h1 className="text-3xl font-bold  text-center">??????????</h1>

            <form className="w-full flex flex-col py-4">
              <Select
                className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
                options={donateOptions}
                placeholder="?????? ??????????"
                value={selectedType}
                onChange={onSelectType}
                isSearchable={true}
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
                options={seasonOptions}
                placeholder="????????"
                value={selectedSeason}
                onChange={onSelectSeason}
                isSearchable={true}
                isMulti
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
                options={genderOptions}
                placeholder="????????"
                value={selectedGender}
                onChange={onSelectGender}
                isSearchable={true}
                isRtl
              />
              <Select
                className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
                options={sectorOptions}
                placeholder="????????"
                value={selectedSector}
                onChange={onSelectSector}
                isSearchable={true}
                isMulti
                isRtl
              />

              <Select
                className="p-3 my-2 bg-white-700 rounded text-gray-600  text-right"
                options={sizeOptions}
                placeholder="??????/????????"
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
                placeholder="???????? ??????????"
                onChange={onSelectQuantity}
              />
              <ImageUploader image={image} setImage={setImage} />
              <GreenButton buttonName="????????" onClickButton={onSubmit} />

              <p className="text-right">
                <button onClick={showDeficiencyHandler} className="text-black">
                  ???????????? ????????????
                </button>{" "}
                <span className="text-green-500">????? ?????? ??????</span>
              </p>
            </form>
          </React.Fragment>
        )}
      </div>
    </Card>
  );
};

export default Donate;
