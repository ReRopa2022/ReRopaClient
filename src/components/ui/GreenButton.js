import React from "react";

const GreenButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClickButton}
      className="bg-green-500 px-6 py-2 rounded cursor-pointer m-2 text-white  hover:bg-green-700 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-800 active:shadow-lg"
    >
      {props.buttonName}
    </button>
  );
};

export default GreenButton;
