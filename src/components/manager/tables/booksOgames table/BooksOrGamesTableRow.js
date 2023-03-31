import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateBookOrGameStatus,
  deleteBookOrGame,
} from "../../../../features/donation/donationSlice";

const BooksOrGamesTableRow = ({ data }) => {
  const [isStatusClicked, setIsStatusClicked] = useState(false);
  const [status, setStatus] = useState(data?.status);
  const [statusColor, setStatusColor] = useState(data?.status);

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
  };
  const onSelectStatus = (e) => {
    setStatus(e.target.value);
  };
  const onUpdateStatus = () => {
    dispatch(updateBookOrGameStatus({ donation_id, status }));

    setIsStatusClicked(false);
  };

  const onClickDelete = () => {
    const deleteOrNot = prompt(
      "האם אתה בטוח שאתה רוצה למחוק את התרומה? אנא אשב כן או לא"
    );
    if (deleteOrNot === "כן") {
      dispatch(deleteBookOrGame(donation_id));
    } else {
      return;
    }
  };
  useEffect(() => {
    if (status === "לא עודכן סטטוס") {
      setStatusColor("text-yellow-500");
      return;
    }
    if (status === "לא התקבלה") {
      setStatusColor("text-red-500");
      return;
    }
    if (status === "התקבלה") {
      setStatusColor("text-yellow-500");
      return;
    }
    if (status === "נמסרה לתרומה") {
      setStatusColor("text-green-500");
      return;
    }
    if (status === "הועברה לחנות") {
      setStatusColor("text-green-500");
      return;
    }
  }, [dispatch, status]);
  return (
    <tr>
      <td className="hidden xs:px-2  py-3 pl-4">
        <div className="xs:px-2  flex justify-center h-5">
          <input
            type="checkbox"
            className="xs:px-2  text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          />
        </div>
      </td>
      <td className="xs:px-2  px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={onClickDelete}
          className="xs:px-2  text-red-500 hover:text-red-700"
        >
          מחיקה
        </button>
      </td>

      <td className="xs:px-2  px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        {!isStatusClicked ? (
          <button className={statusColor} onClick={onEditStatus}>
            {status}
          </button>
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

      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {time}
      </td>
      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.user}
      </td>

      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.age}
      </td>
      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.name}
      </td>
      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.category}
      </td>
      <td className="xs:px-2  rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.type}
      </td>
    </tr>
  );
};

export default BooksOrGamesTableRow;
