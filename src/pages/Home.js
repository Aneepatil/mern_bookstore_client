import React from "react";
import "./Home.css";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home__page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "92vh", padding: "10px" }}
        >
          <h1 style={{ fontSize: "80px" }}>Book Store</h1>
          <h3 style={{ fontSize: "60px" }}>For You</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout The Book From Here
          </p>
          <Link to="/books">
            <button className="viewBook my-3">View Books</button>
          </Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "92vh" }}
        >
          <img
            className="img-fluid home__Img"
            src={'https://images.pexels.com/photos/1329550/pexels-photo-1329550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt="Study__img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
