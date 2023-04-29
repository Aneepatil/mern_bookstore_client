import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import {BASE_URL} from '../HelperUrl'

const Books = () => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${BASE_URL}/api/getbook`)
        .then((res) => setBooks(res.data.books));
    };
    fetch();
  }, []);
  return (
    <div className="bg-dark " style={{ minHeight: "92vh" }}>
      <div className="d-flex justify-content-center align-content-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {books ? (
        <div className="text-white">
          <Book books={books}/>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-content-center text-white " style={{fontSize:"3rem"}}>Fetching data.....</div>
      )}
    </div>
  );
};

export default Books;
