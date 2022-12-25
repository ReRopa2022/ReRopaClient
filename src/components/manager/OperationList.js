import React from "react";
import Card from "../ui/Card";
import GreenButton from "../ui/GreenButton";

const OperationList = (props) => {
  return (
    <Card>
      <ul>
        <li>
          {" "}
          <GreenButton
            onClickButton={props.onClickShowDonate}
            buttonName="בקש תרומה"
          />
        </li>
        <li>
          <GreenButton
            onClickButton={props.onClickShowData}
            buttonName="טבלאות מידע"
          />
        </li>
        <li>
          {" "}
          <GreenButton
            onClickButton={props.onClickShowLocation}
            buttonName="הוסף נקודת איסוף"
          />
        </li>
      </ul>
    </Card>
  );
};

export default OperationList;
