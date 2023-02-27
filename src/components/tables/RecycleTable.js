import React from "react";
import RecycleTableRow from "./RecycleTableRow";

const RecycleTable = ({ data }) => {
  const recycleData = data?.filter((row) => row.type === "מיחזור");
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y text-center divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    מידע
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    סוג נקודה
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    מספר רחוב
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    רחוב
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    עיר
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {recycleData?.map((row) => (
                  <RecycleTableRow key={row._id} data={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleTable;
