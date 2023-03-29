import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateStatus,
  deleteDonation,
} from "../../../../features/donation/donationSlice";
import Status from "../Status";
//import ImageCard from "./ImageCard";

//const API_URL = "https://reropa-server.onrender.com/api/donate/image";
//const LOCAL_API_URL = "http://localhost:5000/api/donate/image";
const TableRow = ({ data }) => {
  //const [imgSrc, setImgSrc] = useState();
  //const [isImageBigger, setIsImageBigger] = useState(false);
  const [isStatusClicked, setIsStatusClicked] = useState(false);
  var [status, setStatus] = useState();
  const [prevStatus, setPrevStatus] = useState();
  const noTimeZone = data?.createdAt.substring(0, 10);
  const blatime = new Date(noTimeZone);
  const time = blatime.toLocaleDateString("en-GB");
  const dispatch = useDispatch();
  const donation_id = data?._id;

  /*const onClickImage = () => {
    setIsImageBigger(!isImageBigger);
  };*/

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

  /*useEffect(() => {
    const blob = new Blob([Int8Array.from(data.image.img.data.data)], {
      type: data.image.img.contentType,
    });

    setImgSrc(window.URL.createObjectURL(blob));

    // eslint-disable-next-line
  }, []);*/

  return (
    <tr>
      <td className=" py-3 pl-4">
        <div className="xs:px-2 flex justify-center h-5">
          <input
            type="checkbox"
            className="xs:px-2 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          />
        </div>
      </td>
      <td className="xs:px-2 px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={onClickDelete}
          className="xs:px-2 text-red-500 hover:text-red-700"
        >
          מחיקה
        </button>
      </td>

      <td className="xs:px-2  px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        {!isStatusClicked ? (
          <Status status={status} onClickHandler={onEditStatus} />
        ) : (
          <>
            <button
              className="xs:px-2 text-red-500 hover:text-red-700"
              onClick={onCancelEditStatus}
            >
              צא ממצב עריכה
            </button>
            <button onClick={onUpdateStatus}>עדכן</button>
            <select onClick={onSelectStatus} className="xs:px-2 rtl-grid">
              <option>עידכון סטטוס</option>
              <option className="xs:px-2 text-red-500">לא התקבלה</option>
              <option className="xs:px-2 text-yellow-500">התקבלה</option>
              <option className="xs:px-2 text-green-500">נמסרה לתרומה</option>
              <option className="xs:px-2 text-green-500">הועברה לחנות</option>
            </select>
          </>
        )}
      </td>
      {/*isImageBigger && imgSrc && (
        <ImageCard imgSrc={imgSrc} onClickImg={onClickImage} />
      )*/}

      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {time}
      </td>
      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.user}
      </td>

      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sectors}
      </td>
      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.sizes}
      </td>
      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.genders}
      </td>
      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.seasons}
      </td>
      <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.types}
      </td>
    </tr>
  );
};

export default TableRow;

/* <td className="xs:px-2 rtl-grid px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {!isImageBigger && imgSrc && (
          <button onClick={onClickImage}>
            <img width="10" height="10" src={imgSrc} alt="donate" />
          </button>
        )}
      </td>*/
