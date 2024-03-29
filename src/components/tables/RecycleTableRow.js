import React from "react";

const RecycleTableRow = ({ data }) => {
  return (
    <tr>
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

export default RecycleTableRow;
