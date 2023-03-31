import React from "react";
import FacebookGroupsTableRow from "./FacebookGroupsTableRow";

const FacebookGroupsTable = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="xs:p-0 p-1.5 w-full inline-block align-middle">
          <div className="overflow-auto  border rounded-lg">
            <table className="min-w-full divide-y text-center divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="xs:px-1 px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    קישור
                  </th>
                  <th
                    scope="col"
                    className="xs:px-1 px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    שם קבוצה
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {data?.map((row) => (
                  <FacebookGroupsTableRow key={row.info} data={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookGroupsTable;
