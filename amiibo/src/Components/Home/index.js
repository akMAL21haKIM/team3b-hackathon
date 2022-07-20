import React, { Component } from "react";
import "./home.css";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import FAQ from "./FAQ/FAQ";
import mainHeader from "./asset/lineup.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <div className="background">
          <div className="content-container">
            <h1>
              WELCOME TO <span>AMIIBO WORLD</span>
            </h1>
            <h3>
              Invite characters to your island in the Animal Crossing™: New
              Horizons game.
            </h3>
            <br />
            <div className="search d-flex">
              <input type="text" placeholder="Find character" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
