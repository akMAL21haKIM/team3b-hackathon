import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import "./discover.css";

//declaration
const Discover = () => {
  var [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  var [search, setSearch] = useState("");
  const navigation = useNavigate();

  //to call api and list
  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiiboseries/", {})
      .then(function (response) {
        setData(response.data.amiibo); // array for display data
        setDataSearch(response.data.amiibo); //  array for search function
      });
  }, []);

  //for search input
  let getval = (x) => {
    setSearch(x.target.value);
  };

  //to filter search
  const handleSearch = (res) => {
    res.preventDefault();
    setData(
      dataSearch.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <br></br>
        <h1>Discover your desired Series</h1>
        <div className="search d-flex">
          <input type="text" placeholder="Find Series" onChange={getval} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h3>Choose the series</h3>
        <div className="grid-container-discover">
          {data.map((res, index) => (
            <div className="grid-item-discover" key={index}>
              <button
                className="discoverS-btn"
                onClick={() => {
                  navigation(`/details/${res.name}`);
                }}
              >
                <h3> {res.name} </h3>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
