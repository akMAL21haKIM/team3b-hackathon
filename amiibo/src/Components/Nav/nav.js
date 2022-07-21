import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../Home/asset/logo3.png";

const Nav = () => {
  const ref = useRef();

  return (
    <div className="sticky">
      <div className="grid-container">
        <div className="grid-item-logo">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
            <img />
          </div>
        </div>
        <div className="grid-item" id="grid-item-menu">
          {/* for mobile view toggle  */}
          <div
            className="grid-item__icon"
            onClick={() => {
              ref.current.classList.toggle("visible");
            }}
          >
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
          </div>
          {/* for desktop view nav */}
          <div className="menu-buttons" ref={ref}>
            <Link to="/">
              <button id="home-btn">Home</button>
            </Link>
            <Link to="/discover">
              <button id="discover-btn">Discover</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
