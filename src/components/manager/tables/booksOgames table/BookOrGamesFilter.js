import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
const BooksOrGamesFilter = (props) => {
  const [search, setSearch] = useState();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClickSearch = () => {
    // eslint-disable-next-line array-callback-return
    const filteredData = props.data?.filter((element) => {
      if (search === element?.user) {
        return element;
      }

      if (element?.sectors.includes(search)) {
        return element;
      }
      if (element?.sizes.includes(search)) {
        return element;
      }
      if (search === element?.genders) {
        return element;
      }
      if (element?.seasons.includes(search)) {
        return element;
      }

      if (search === element?.types) {
        return element;
      }
    });

    props.setSearchData(filteredData);
  };
  return (
    <div className="flex justify-between py-3 pl-2">
      <div className="relative max-w-xs">
        <label htmlFor="hs-table-search" className="sr-only">
          Search
        </label>
        <input
          onChange={onChangeSearch}
          type="text"
          name="hs-table-search"
          id="hs-table-search"
          className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 ">
          <button onClick={onClickSearch}>
            <GoSearch />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <button className="relative z-0 mr-2 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
            <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">Filters</div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksOrGamesFilter;
