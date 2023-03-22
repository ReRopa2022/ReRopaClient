import React from "react";

const ImageCard = (props) => {
  return (
    <div className="col-3">
      <div className="adjust">
        <div className="image z-100">
          <img width="300" height="300" src={props.imgSrc} alt="donate" />
          <button className="text-black" onClick={props.onClickImg}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
