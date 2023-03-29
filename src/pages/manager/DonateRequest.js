import React, { useState } from "react";
import Select from "react-select";

import { organizationOptions, urgentOptions } from "../../data/optionsData";
import Card from "../../components/ui/Card";
import GreenButton from "../../components/ui/GreenButton";
import DonateRequestDetails from "../../components/manager/DonateRequestDetails";

const DonateRequest = (props) => {
  const [donationDetailsIsShown, setDonationDetailsIsShown] = useState(false);
  const [needyData, setNeedyData] = useState();
  const [selectedOrganization, setSelectedOrganization] = useState();
  const [selectedNeedy, setSelectedNeedy] = useState();
  const [selectedPhone, setSelectedPhone] = useState();
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedUrgent, setSelectedUrgent] = useState();

  const hideDonationDetailsHandler = () => {
    setDonationDetailsIsShown(false);
  };

  const onSelectOrganization = (data) => {
    setSelectedOrganization(data);
  };

  const onSelectNeedy = (e) => {
    setSelectedNeedy(e.target.value);
  };

  const onSelectAddress = (e) => {
    setSelectedAddress(e.target.value);
  };

  const onSelectPhone = (e) => {
    setSelectedPhone(e.target.value);
  };

  const onSelectUrgent = (data) => {
    setSelectedUrgent(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isUrgent = selectedUrgent.label;
    const organization = selectedOrganization.label;

    const formNeedyData = {
      organization,
      needy: selectedNeedy,
      phone: selectedPhone,
      address: selectedAddress,
      isUrgent,
    };
    setNeedyData(formNeedyData);

    setDonationDetailsIsShown(true);
  };

  return (
    <Card>
      <div className="max-w-[320px] h-[550px] mx-auto py-10 ">
        {donationDetailsIsShown ? (
          <DonateRequestDetails
            needyData={needyData}
            onHideHandler={hideDonationDetailsHandler}
          />
        ) : (
          <>
            <h1 className="text-3xl font-bold  text-center">בקשת תרומה</h1>

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
              <input
                className="rtl-grid p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                type="text"
                placeholder=" שם הנזקק "
                name="needy"
                value={selectedNeedy}
                onChange={onSelectNeedy}
              />
              <input
                className="rtl-grid p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                type="text"
                placeholder=" מספר טלפון  "
                value={selectedPhone}
                onChange={onSelectPhone}
              />
              <input
                className="rtl-grid p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                type="text"
                placeholder=" כתובת"
                value={selectedAddress}
                onChange={onSelectAddress}
              />
              <Select
                className="p-3 my-2 bg-white-700 rouded text-gray-600  text-right"
                options={urgentOptions}
                placeholder="רמת דחיפות"
                value={selectedUrgent}
                onChange={onSelectUrgent}
                isSearchable={true}
                isRtl
              />
              <GreenButton
                buttonName="מעבר למילוי בקשה"
                onClickButton={onSubmit}
              />
              <GreenButton
                onClickButton={props.onClickHide}
                buttonName="חזור"
              />
            </form>
          </>
        )}
      </div>
    </Card>
  );
};

export default DonateRequest;
