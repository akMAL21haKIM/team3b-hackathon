import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";

const Details = () => {
  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <h1>Details page</h1>
        <div className="search d-flex">
          <input type="text" placeholder="Find character" />
          <button>Search</button>
        </div>
        <h1>testtt</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
