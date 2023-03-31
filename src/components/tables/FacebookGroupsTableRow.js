import React from "react";

const FacebookGroupsTableRow = ({ data }) => {
  return (
    <tr>
      <td className="xs:px-1 xs:py-1 px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        <a href={data?.url} target="_blank" rel="noreferrer">
          קישור לפייסבוק
        </a>
      </td>
      <td className="xs:px-1 xs:py-1 px-6  py-4 text-sm text-gray-800 whitespace-nowrap">
        {data?.groupName}
      </td>
    </tr>
  );
};

export default FacebookGroupsTableRow;
