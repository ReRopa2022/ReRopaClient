import React from "react";

const DeficiencyTableRow = ({ data }) => {
  const noTimeZone = data?.createdAt.substring(0, 10);
  return (
    <tr>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {noTimeZone}
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
        {data?.organization}
      </td>
    </tr>
  );
};

export default DeficiencyTableRow;
