import React from "react";

const Card = (props) => {
  const childClass = props.className;
  return (
    <div className="w-full h-[100%]">
      <img
        className="hidden sm:block absolute w-full h-[100%] object-cover"
        src="https://media.istockphoto.com/photos/many-second-hand-clothes-are-on-sale-picture-id1248406700?k=20&m=1248406700&s=612x612&w=0&h=OH8eyoshszG0w08jVfaVRkuhpUNz92nRDsvxeuWdmy8="
        alt="/"
      />
      <div className="bg-white/60 absolute w-full h-full px-4 py-10">
        <div className="max-w-[450px] mx-auto bg-black/75 text-white">
          <div className={childClass}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
