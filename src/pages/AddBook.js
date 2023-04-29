import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router";
import {BASE_URL} from '../HelperUrl'


const AddBook = () => {
  // const navigate = useNavigate();
  const [newBook, setNewBook] = useState({
    bookName: "",
    auther: "",
    description: "",
    image: "",
    price: "",
  });

  const handleAddBook = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleBook = async (e) => {
    e.preventDefault();

    await axios.post(`${BASE_URL}/api/add`,newBook)
    .then((res)=>console.log(res.data)).catch(err=>console.log(err.response.data))

    setNewBook({
      bookName: "",
      auther: "",
      description: "",
      image: "",
      price: "",
    })
  };


  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "92vh" }}
    >
      <div className="container">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name:-
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="bookName"
            value={newBook.bookName}
            onChange={handleAddBook}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Auther:-
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Auther Name"
            id="exampleFormControlInput1"
            name="auther"
            value={newBook.auther}
            onChange={handleAddBook}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image URL:-
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Image URL"
            id="exampleFormControlInput1"
            name="image"
            value={newBook.image}
            onChange={handleAddBook}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Price:-
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Book Price"
            id="exampleFormControlInput1"
            name="price"
            value={newBook.price}
            onChange={handleAddBook}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-white"
          >
            Description:-
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Book Description"
            id="exampleFormControlTextarea1"
            rows="5"
            name="description"
            value={newBook.description}
            onChange={handleAddBook}
          ></textarea>
        </div>
        <button onClick={handleBook} className="btn btn-light">
          Save Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
