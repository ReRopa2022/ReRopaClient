import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://greenactioncentre.ca/wp-content/uploads/2018/02/Recycle-Triangle-Cloth-CC-Licensed-noncommercial-share-1024x675.jpg"
              className="rounded-full"
              alt="logo"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-right text-gray-900 font-bold md:text-4xl">
              !ReRopaברוכים הבאים ל
            </h2>
            <p className="mt-6 text-right text-gray-600 rtl-grid">
              רירופה הוא פרויקט קהילתי שאפתני שמטרתו לקחת את עולם התרומות צעד
              קדימה.
            </p>
            <p className="mt-4 text-right text-gray-600">
              .אנחנו מבטיחים שהתרומה שלך תגיע למקום שהכי זקוק לו
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
