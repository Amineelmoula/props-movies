import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">Theater</div>
      <div className="nav">
        <div className="links">
          <a href="home">Home</a>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
