import React from "react";

const Status = ({ status, onClickHandler }) => {
  return (
    <>
      {status === "לא עודכן סטטוס" && (
        <button onClick={onClickHandler} className="text-yellow-500">
          לא עודכן סטטוס{" "}
        </button>
      )}
      {status === "לא התקבלה" && (
        <button onClick={onClickHandler} className="text-red-500">
          לא התקבלה
        </button>
      )}
      {status === "התקבלה" && (
        <button onClick={onClickHandler} className="text-yellow-500">
          התקבלה
        </button>
      )}
      {status === "נמסרה לתרומה" && (
        <button onClick={onClickHandler} className="text-green-500">
          נמסרה לתרומה
        </button>
      )}
      {status === "הועברה לחנות" && (
        <button onClick={onClickHandler} className="text-green-500">
          הועברה לחנות
        </button>
      )}
    </>
  );
};

export default Status;
