import React, { useEffect, useState } from "react";
import Status from "./Status";

const TableRow = ({ data }) => {
  const [isStatusClicked, setIsStatusClicked] = useState(false);
  var [status, setStatus] = useState();

  const onEditStatus = () => {
    setIsStatusClicked(true);
  };
  const onCancelEditStatus = () => {
    setIsStatusClicked(false);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const onUpdateStatus = () => {
    onCancelEditStatus();
  };
  useEffect(() => {
    if (data?.status) {
      setStatus(data.status);
    } else if (status) {
    } else {
      setStatus("לא עודכן סטטוס");
    }
  }, [onChangeStatus]);
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
        <a className="text-red-500 hover:text-red-700" href="#">
          מחיקה
        </a>
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
            <select onChange={onChangeStatus} className="rtl-grid">
              <option>עידכון סטטוס</option>
              <option className="text-red-500">לא התקבלה</option>
              <option className="text-yellow-500">התקבלה</option>
              <option className="text-green-500">נמסרה לתרומה</option>
              <option className="text-green-500">הועברה לחנות</option>
            </select>
          </>
        )}
      </td>

      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.createdAt}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.user}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.quantity}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sectors}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sizes}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.genders}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.seasons}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.types}
      </td>
    </tr>
  );
};

export default TableRow;
