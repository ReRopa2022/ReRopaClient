import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateStatus, reset } from "../../../features/donation/donationSlice";
import Status from "./Status";

const TableRow = ({ data }) => {
  const [isStatusClicked, setIsStatusClicked] = useState(false);
  var [status, setStatus] = useState();
  const [prevStatus, setPrevStatus] = useState();
  const noTimeZone = data?.createdAt.substring(0, 10);
  const dispatch = useDispatch();
  const { isSuccess, isError } = useSelector((state) => state.donation);
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
    console.log({ status, donation_id });

    setPrevStatus(status);
    setIsStatusClicked(false);
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

    if (isError) {
      toast.error("סטטוס תרומה לא עודכן, אנא נסה שוב");
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success("סטטוס תרומה עודכן בהצלחה");
      dispatch(reset());
    }
  }, [data.status, dispatch, isError, isSuccess, status]);
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
        <button className="text-red-500 hover:text-red-700">מחיקה</button>
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

      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {noTimeZone}
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
