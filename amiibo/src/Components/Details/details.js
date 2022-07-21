import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import axios from "axios";
import "./details.css";

const Details = () => {
  var [data, setData] = useState([]);
  var name = useParams().name;
  const navigation = useNavigate();
  const [dataSearch, setDataSearch] = useState([]);
  var [search, setSearch] = useState("");

  let getval = (x) => {
    setSearch(x.target.value);
  };

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiibo/?amiiboSeries=" + name, {})
      .then(function (response) {
        setData(response.data.amiibo);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiibo/?amiiboSeries=" + name, {})
      .then(function (response) {
        setDataSearch(response.data.amiibo);
      });
  }, []);

  const handleSearch = (res) => {
    res.preventDefault();
    setData(dataSearch.filter((x) => x.name.includes(search)));
  };

  return (
    <div>
      <Navigation />
      <div className="discover-cont">
        <h1>Details page</h1>
        <div className="search d-flex">
          <input type="text" placeholder="Find Series" onChange={getval} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h1>Series Choosen : {name}</h1>
        <div>
          <div className="grid-container-details">
            {data.map((res, index) => (
              <div className="grid-item-details" key={index}>
                <button
                  onClick={() => {
                    navigation(`/character/${res.character}`);
                  }}
                >
                  <img src={res.image} />
                  <br />
                  <h3>{res.name}</h3>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
