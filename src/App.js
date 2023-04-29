import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Footer from "./components/Footer";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/book/:id" element={<UpdateBook/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
