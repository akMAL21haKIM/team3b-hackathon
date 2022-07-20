import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import Discover from "../Discover";
import axios from "axios";

const Details = () => {
  var [data, setData] = useState([]);
  var name = useParams().name;

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiibo/?amiiboSeries=" + name, {})
      .then(function (response) {
        setData(response.data.amiibo);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <h1>Details page</h1>
        <div className="search d-flex">
          <input type="text" placeholder="Find character" />
          <button>Search</button>
        </div>
        <h1>{useParams().name}</h1>
        <div>
          {data.map((res, index) => (
            <p key={index}> {res.name}</p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
