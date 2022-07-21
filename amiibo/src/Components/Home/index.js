import React, { useEffect, useState } from "react";
import "./home.css";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import FAQ from "./FAQ/FAQ";
import Carousel, { CarouselItem } from "../Categories/Carousel";
import animal_crossing from "./asset/animal_crossing.png";
import legend_of_zelda from "./asset/legend_of_zelda.png";
import super_mario from "./asset/super_mario.png";
import { Link } from "react-router-dom";

const image = [
  { id: animal_crossing },
  { id: legend_of_zelda },
  { id: super_mario },
];

const Home = () => {
  const [dataSearch, setDataSearch] = useState([]);
  var [search, setSearch] = useState("");

  const handleSearch = (res) => {
    res.preventDefault();
    //setData(dataSearch.filter((x) => x.name.includes(search)));
  };

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
            <Link to="/discover">
              <button className="btn-disc">Start Discover Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-cont">
        <Carousel>
          {image.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <img src={item.id} />
              </CarouselItem>
            );
          })}
        </Carousel>
        <br />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
