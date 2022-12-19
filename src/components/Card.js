import React from "react";

const Card = (props) => {
  const childClass = props.className;
  return (
    <div className="w-full h-screen mb-3">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className=" fixed top-0 left-0 w-full "></div>
      <div className="bg-white/60 absolute h-full w-full px-4 py-10 z-50">
        <div className="max-w-[450px] h-[800] mx-auto bg-black/75 text-white">
          <div className={childClass}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
