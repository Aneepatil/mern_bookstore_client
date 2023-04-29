import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateBook = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [updateBook, setUpdateBook] = useState({
    bookName: "",
    auther: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    const handelupdateBook = async () => {
      await axios
        .get(`http://localhost:8000/api/getbook/${id}`)
        .then((res) => setUpdateBook(res.data.books))
        .catch((err) => console.log(err));
    };
    handelupdateBook();
  }, [id]);

  const submitUpdatedBook = () => {
    const sendUpdatedBook = async () => {
      await axios.put(`http://localhost:8000/api/updatebook/${id}`, {
        bookName: String(updateBook.bookName),
        auther: String(updateBook.auther),
        description: String(updateBook.description),
        image: String(updateBook.image),
        price: String(updateBook.price),
      });

      history("/books");
    };
    sendUpdatedBook();
  };
  const handleUpdateBook = (e) => {
    const { name, value } = e.target;

    setUpdateBook({ ...updateBook, [name]: value });
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "92vh" }}
    >
      {updateBook && (
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
              value={updateBook.bookName}
              onChange={handleUpdateBook}
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
              value={updateBook.auther}
              onChange={handleUpdateBook}
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
              value={updateBook.image}
              onChange={handleUpdateBook}
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
              value={updateBook.price}
              onChange={handleUpdateBook}
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
              value={updateBook.description}
              onChange={handleUpdateBook}
            ></textarea>
          </div>
          <button className="btn btn-light" onClick={submitUpdatedBook}>
            Update Book
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;
