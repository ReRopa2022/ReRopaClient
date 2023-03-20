import React, { useState, useEffect } from "react";
import axios from "axios";
import BooksOrGamesFilter from "../../components/manager/tables/booksOgames table/BookOrGamesFilter";
import BooksOrGamesTable from "../../components/manager/tables/booksOgames table/BooksOrGamesTable";
const API_URL = "https://reropa-server.onrender.com/api/donate/book-or-game";
const BooksOrGamesPage = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setData(response.data);
      setSearchData(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <BooksOrGamesFilter data={data} setSearchData={setSearchData} />
        <BooksOrGamesTable data={searchData} />
      </div>
    </div>
  );
};

export default BooksOrGamesPage;
