import React, { useState } from "react";
import DonateRequest from "../../components/manager/DonateRequest";
import OperationList from "../../components/manager/OperationList";
import Queries from "../../components/manager/Queries";
import AddLocation from "../../components/manager/AddLocation";

const ManagerOptions = () => {
  const [queriesAreShown, setQueriesAreShown] = useState(false);
  const [donateRequestIsShown, setDonateRequestIsShown] = useState(false);
  const [addLocationtIsShown, setAddLocationtIsShown] = useState(false);
  const [operationsAreShown, setOperationsAreShown] = useState(true);

  const queriesShowHandler = () => {
    setQueriesAreShown(true);
    setOperationsAreShown(false);
  };

  const queriesHideHandler = () => {
    setQueriesAreShown(false);
    setOperationsAreShown(true);
  };

  const donateRequestShowHandler = () => {
    setDonateRequestIsShown(true);
    setOperationsAreShown(false);
  };

  const donateRequestHideHandler = () => {
    setDonateRequestIsShown(false);
    setOperationsAreShown(true);
  };
  const addLocationShowHandler = () => {
    setAddLocationtIsShown(true);
    setOperationsAreShown(false);
  };

  const addLocationHideHandler = () => {
    setAddLocationtIsShown(false);
    setOperationsAreShown(true);
  };
  return (
    <div>
      {!operationsAreShown ? (
        <>
          {queriesAreShown && <Queries onClickHide={queriesHideHandler} />}
          {donateRequestIsShown && (
            <DonateRequest onClickHide={donateRequestHideHandler} />
          )}
          {addLocationtIsShown && (
            <AddLocation onClickHide={addLocationHideHandler} />
          )}
        </>
      ) : (
        <OperationList
          onClickShowData={queriesShowHandler}
          onClickShowDonate={donateRequestShowHandler}
          onClickShowLocation={addLocationShowHandler}
        />
      )}
    </div>
  );
};

export default ManagerOptions;
