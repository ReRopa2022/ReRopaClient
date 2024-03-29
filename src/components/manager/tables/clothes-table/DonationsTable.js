import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DonationsTableRow from "./DonationsTableRow";
import { reset } from "../../../../features/donation/donationSlice";

function Table({ data }) {
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
    <div className="xs:p-0 p-1.5  w-full inline-block align-middle">
      <div className=" overflow-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 overflow-y-auto">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3  hidden pl-4">
                <div className="flex justify-center xs:h-8 h-5 ">
                  <button className="text-red-500 ">מחק פרטים שסומנו</button>
                </div>
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מחיקה
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                עריכת סטטוס
              </th>

              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                תאריך
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                תורמ.ת
              </th>

              {/*<th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מגזר
              </th>*/}
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מידה
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מגדר
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                עונה
              </th>
              <th
                scope="col"
                className="xs:px-1 xs:text-base xs:py-2 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                סוג תרומה
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.map((row) => (
              <DonationsTableRow key={row._id} data={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
