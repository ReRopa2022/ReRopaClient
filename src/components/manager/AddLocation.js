import React from "react";
import GreenButton from "../ui/GreenButton";

const AddLocation = (props) => {
  return (
    <div>
      <GreenButton onClickButton={props.onClickHide} buttonName="חזור" />
    </div>
  );
};

export default AddLocation;
