import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateStatus,
  deleteDonation,
} from "../../../features/donation/donationSlice";
import Status from "./Status";

const TableRow = ({ data }) => {
  const [isStatusClicked, setIsStatusClicked] = useState(false);
  var [status, setStatus] = useState();
  const [prevStatus, setPrevStatus] = useState();
  const noTimeZone = data?.createdAt.substring(0, 10);
  const blatime = new Date(noTimeZone);
  const time = blatime.toLocaleDateString("en-GB");
  console.log(time);
  console.log(blatime);
  const dispatch = useDispatch();
  const donation_id = data?._id;

  const onEditStatus = () => {
    setIsStatusClicked(true);
  };
  const onCancelEditStatus = () => {
    setIsStatusClicked(false);
    setStatus(prevStatus);
  };
  const onSelectStatus = (e) => {
    setStatus(e.target.value);
  };
  const onUpdateStatus = () => {
    dispatch(updateStatus({ donation_id, status }));

    setPrevStatus(status);
    setIsStatusClicked(false);
  };

  const onClickDelete = () => {
    const deleteOrNot = prompt(
      "האם אתה בטוח שאתה רוצה למחוק את התרומה? אנא אשב כן או לא"
    );
    if (deleteOrNot === "כן") {
      dispatch(deleteDonation(donation_id));
    } else {
      return;
    }
  };
  useEffect(() => {
    if (data?.status) {
      setStatus(data.status);
      setPrevStatus(data.status);
    } else if (status) {
    } else {
      setStatus("לא עודכן סטטוס");
      setPrevStatus("לא עודכן סטטוס");
    }
  }, [data.status, dispatch, status]);
  return (
    <tr>
      <td className="py-3 pl-4">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          />
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={onClickDelete}
          className="text-red-500 hover:text-red-700"
        >
          מחיקה
        </button>
      </td>

      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        {!isStatusClicked ? (
          <Status status={status} onClickHandler={onEditStatus} />
        ) : (
          <>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={onCancelEditStatus}
            >
              צא ממצב עריכה
            </button>
            <button onClick={onUpdateStatus}>עדכן</button>
            <select onClick={onSelectStatus} className="rtl-grid">
              <option>עידכון סטטוס</option>
              <option className="text-red-500">לא התקבלה</option>
              <option className="text-yellow-500">התקבלה</option>
              <option className="text-green-500">נמסרה לתרומה</option>
              <option className="text-green-500">הועברה לחנות</option>
            </select>
          </>
        )}
      </td>

      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {time}
      </td>
      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.user}
      </td>

      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sectors}
      </td>
      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sizes}
      </td>
      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.genders}
      </td>
      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.seasons}
      </td>
      <td className="rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.types}
      </td>
    </tr>
  );
};

export default TableRow;
