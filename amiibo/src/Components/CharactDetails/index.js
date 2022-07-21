import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/footer";
import "./character.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../Nav/nav";

const CharactDetails = () => {
  const [data, setData] = useState([]);
  var character = useParams().character;
  const defaultPic = "../Home/asset/untitleImg.jpg";
  const navigation = useNavigate();

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
      <h1>Characters related to {character}</h1>
      <br></br>
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
