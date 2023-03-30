import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import BooksOrGamesTableRow from "./BooksOrGamesTableRow";
import { reset } from "../../../../features/donation/donationSlice";

function BooksOrGamesTable({ data }) {
  const {
    isStatusUpdated,
    isDonateDeleted,
    isStatusUpdatedError,
    isDonateDeletedError,
  } = useSelector((state) => state.donation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStatusUpdatedError) {
      toast.error("סטטוס תרומה לא עודכן, אנא נסה שוב");
      dispatch(reset());
    }
    if (isStatusUpdated) {
      toast.success("סטטוס תרומה עודכן בהצלחה");
      dispatch(reset());
    }

    if (isDonateDeletedError) {
      toast.error("תרומה לא נמחקה, אנא נסה שוב");
      dispatch(reset());
    }
    if (isDonateDeleted) {
      toast.success("תרומה נמחקה בהצלחה");
      dispatch(reset());
    }
  }, [
    dispatch,
    isDonateDeleted,
    isDonateDeletedError,
    isStatusUpdated,
    isStatusUpdatedError,
  ]);
  return (
    <div className=" xs:p-0 p-1.5 w-full  inline-block align-middle">
      <div className=" overflow-auto border rounded-lg">
        <table className=" min-w-full divide-y divide-gray-200 overflow-y-auto">
          <thead className="  bg-gray-50">
            <tr>
              <th scope="col" className="xs:px-1  py-3 hidden pl-4">
                <div className="xs:px-1  flex justify-center h-5">
                  <button className="xs:px-1 xs:text-base text-red-500">
                    מחק פרטים שסומנו
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מחק
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base  px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                ערוך סטטוס
              </th>

              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                תאריך
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                תורם
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                גיל
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                שם
              </th>

              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                קטגוריה
              </th>

              <th
                scope="col"
                className="xs:px-1 xs:text-base px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                סוג תרומה
              </th>
            </tr>
          </thead>
          <tbody className="xs:px-1  divide-y divide-gray-200">
            {data?.map((row) => (
              <BooksOrGamesTableRow key={row._id} data={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BooksOrGamesTable;
