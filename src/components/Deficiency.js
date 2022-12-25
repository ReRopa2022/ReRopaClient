import React from "react";
import GreenButton from "./ui/GreenButton";

const Deficiency = (props) => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold  text-center">מה חסר לנו</h1>

      <table className="text-left w-full">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/5">כמות</th>
            <th className="p-4 w-1/5">מידה</th>
            <th className="p-4 w-1/5">מגזר</th>
            <th className="p-4 w-1/5">מגדר</th>
            <th className="p-4 w-1/5">עונה</th>
          </tr>
        </thead>

        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll rtl-grid w-full">
          <tr className="flex w-full mb-4">
            <td className="p-4 w-1/5">20</td>
            <td className="p-4 w-1/5">3</td>
            <td className="p-4 w-1/5">חילוני</td>
            <td className="p-4 w-1/5">זכר</td>
            <td className="p-4 w-1/5">חורף</td>
          </tr>
        </tbody>
      </table>
      <div className="pl-20">
        <GreenButton
          buttonName="לחזרה לתרומה"
          onClickButton={props.onHideHandler}
        />
      </div>
    </div>
  );
};

export default Deficiency;
