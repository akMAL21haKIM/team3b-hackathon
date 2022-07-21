import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";

import Nav from "../Nav/nav";
import "./discover.css";


const Discover = () => {
  var [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  var [search, setSearch] = useState("");
  const navigation = useNavigate();
  var resetArray = [];

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiiboseries/", {})
      .then(function (response) {
        setData(response.data.amiibo);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiiboseries/", {})
      .then(function (response) {
        setDataSearch(response.data.amiibo);
      });
  }, []);

  const handleSearch = (res) => {
    res.preventDefault();
    setData(dataSearch.filter((x) => x.name.includes(search)));
  };

  let getval = (x) => {
    setSearch(x.target.value);
  };

  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <h1>Discover your desired character</h1>
        <div className="search d-flex">
          <div className="search d-flex">
            <input type="text" placeholder="Find Series" onChange={getval} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <h3>Choose the series</h3>
        <div className="discoverS">
          {data.map((res, index) => (
            <button
              className="discoverS-btn"
              key={index}
              onClick={() => {
                navigation(`/details/${res.name}`);
              }}
            >
              {res.name}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
