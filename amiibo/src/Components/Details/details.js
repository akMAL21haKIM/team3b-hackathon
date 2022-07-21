import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import axios from "axios";

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
        <h1>{name}</h1>
        <div>
          {data.map((res, index) => (
            <button
              key={index}
              onClick={() => {
                navigation(`/character/${res.character}`);
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

export default Details;
