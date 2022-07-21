import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import "./character.css";

const CharactDetails = () => {
  const [data, setData] = useState([]);
  var character = useParams().character;
  const defaultPic = "../Home/asset/untitleImg.jpg";

  useEffect(() => {
    axios
      .get("https://amiiboapi.com/api/amiibo/?character=" + character, {})
      .then(function (response) {
        setData(response.data.amiibo);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <br></br>
      <h1>Series' Characters</h1>
      <div className="grid-container-chara">
        {data.map((res, index) => (
          <div key={index}>
            <div className="grid-item-chara">
              <h1>{res.name}</h1>
              <img src={res.image ? res.image : defaultPic} />
              <p>
                <b>Amiibo Series : </b>
                {res.amiiboSeries}
              </p>
              <p>
                <b>Character Name : </b>
                {res.character}
              </p>
              <p>
                <b>Game Series : </b>
                {res.gameSeries}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CharactDetails;
