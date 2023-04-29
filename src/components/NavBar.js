import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link className="navbar-brand text-white" to='/'>
            AIT Book Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active text-white" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/books' className="nav-link text-white" >
                  All Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/addbook' className="nav-link text-white" >
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <hr style={{height:"1px",margin:"0px"}}/>
    </>
  );
};

export default NavBar;
