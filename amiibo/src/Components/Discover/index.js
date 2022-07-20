import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";

const Discover = () => {
  var [data, setData] = useState([]);
  var [search, setSearch] = useState("");
  console.log(data);

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiiboseries/", {})
      .then(function (response) {
        setData(response.data.amiibo);
      });
  }, []);

  const handleSearch = (res) => {
    res.preventDefault();
    if (data.some((item) => item.name === search)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };

  // const handleSearch = (res) => {
  //   res.preventDefault();
  //   var test = data.some((item) => {
  //     if (item.name === search) {
  //       console.log("in");
  //       console.log(item.name);
  //     } else {
  //       console.log("test");
  //     }
  //   });
  // };

  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <h1>Discover your desired character</h1>
        <div className="search d-flex">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id="searchValue"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              placeholder="Find character"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <h3>Choose the series</h3>
        <p>
          <div>
            {data.map((anything) => (
              <p>{anything.name}</p>
            ))}
          </div>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
