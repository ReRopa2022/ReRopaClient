import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLocation } from "../../../../features/manager/addLocationSlice";
const RecycleTableRowManager = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickUpdate = () => {
    navigate("/update-location", { state: { data: data } });
  };
  const onClickDelete = () => {
    const deleteOrNot = prompt(
      "האם אתה בטוח.ה שאת.ה רוצה למחוק את התרומה? אנא השיבי/השב כן או לא"
    );
    if (deleteOrNot === "כן") {
      console.log(data?._id);
      dispatch(deleteLocation(data?._id));
    } else {
      return;
    }
  };

  return (
    <tr>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        <button onClick={onClickDelete} className="text-red-600 ">
          מחיקה
        </button>
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        <button className="text-yellow-600" onClick={onClickUpdate}>
          עדכון
        </button>
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.display ? "מוצגת" : "לא מוצגת"}
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.info}
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.type}
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.street_no}
      </td>
      <td className="xs:px-1 xs:py-1 px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.street}
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.city}
      </td>
    </tr>
  );
};

export default RecycleTableRowManager;
