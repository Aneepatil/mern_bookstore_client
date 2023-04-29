import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Book = ({ books}) => {

    const history = useNavigate()

  const handleDeletBook =  (id) => {
     axios
      .delete(`http://localhost:8000/api/deletebook/${id}`)
      .then((res) => {
        console.log(res)
        history('/books')
      
      })
      .catch((err) => console.log("------>",err));  

    };

  return (
    <div className="d-flex justify-content-around align-content-center flex-wrap p-4">
      {books &&
        books.map((book) => {
          return (
            <div
              key={book._id}
              className="card bg-dark border-0 mb-5"
              style={{ width: "300px", height: "550px" }}
            >
              <img
                src={book.image}
                className="card-img-top"
                style={{ width: "300px", height: "350px" }}
                alt={book.bookName}
              />
              <div className="card-body">
                <h5 className="card-title text-white">
                  {book.bookName.slice(0, 70)}...
                </h5>
                <p className="card-text fs-4">Price : ₹ {book.price} /-</p>
              </div>
              <div className="card-body d-flex justify-content-around ">
                <Link
                  to={`/book/${book._id}`}
                  className="card-link text-decoration-none text-white text-uppercase fw-semibold py-1 px-2 bg-secondary align-middle"
                  style={{ border: "1px solid white", height: "fit-content" }}
                >
                  Update Book
                </Link>
                <Link
                  className="card-link text-decoration-none text-white text-uppercase fw-semibold py-1 px-2 bg-danger"
                  style={{ border: "1px solid white",height: "fit-content" }}
                  onClick={() => handleDeletBook(book._id)}
                >
                  Delete Book
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Book;
