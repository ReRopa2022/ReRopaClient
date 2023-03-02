import React from "react";

import DonationsTableRow from "./DonationsTableRow";

function Table({ data }) {
  return (
    <div className="p-1.5 w-full inline-block align-middle">
      <div className="overflow-hidden border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 overflow-y-auto">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 pl-4">
                <div className="flex items-center h-5">
                  <button className="text-red-500">מחק פרטים שסומנו</button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                מחק
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                ערוך סטטוס
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                תאריך
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                תורם
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                כמות
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                מגזר
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                מידה
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                מגדר
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                עונה
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
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
