import React from "react";

const GreenButton = (props) => {
  return (
    <button
      onClick={props.onClickButton}
      className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white"
    >
      {props.buttonName}
    </button>
  );
};

export default GreenButton;
