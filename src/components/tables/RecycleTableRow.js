import React from "react";

const RecycleTableRow = ({ data }) => {
  return (
    <tr>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.info}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.type}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.street_no}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.street}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.city}
      </td>
    </tr>
  );
};

export default RecycleTableRow;
