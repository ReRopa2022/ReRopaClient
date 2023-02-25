import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td className="py-3 pl-4">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox" className="sr-only">
            Checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a className="text-red-500 hover:text-red-700" href="#">
          מחיקה
        </a>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a className="text-green-500 hover:text-green-700" href="#">
          סטטוס{" "}
        </a>
      </td>

      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.createdAt}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.user}
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
        {data?.types}
      </td>
    </tr>
  );
};

export default TableRow;
