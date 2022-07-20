import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../Home/asset/logo3.png";

const Nav = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="menu-buttons">
            <Link to="/">
              <button id="home-btn">Home</button>
            </Link>
            <Link to="/discover">
              <button id="discover-btn">Discover</button>
            </Link>
            <Link to="/Discover">
              <button id="news-btn">News</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
