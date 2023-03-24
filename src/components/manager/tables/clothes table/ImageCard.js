import React from "react";

const ImageCard = (props) => {
  return (
    <div className="col-3">
      <div className="adjust">
        <div className="image z-100">
          <img
            className="rounded-full"
            width="150"
            height="150"
            src={props.imgSrc}
            alt="donate"
          />
          <div className="flex justify-start z-10">
            <button
              className="bg-green-600 px-2 py-1 rounded cursor-pointer  text-white  hover:bg-green-700 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-800 active:shadow-lg"
              onClick={props.onClickImg}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
