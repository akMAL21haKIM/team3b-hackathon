import React, { useState } from "react";
import "./home.css";
import Navigation from "../Nav/nav";
import Footer from "../Footer/footer";
import FAQ from "./FAQ/FAQ";
import Carousel, { CarouselItem } from "../Categories/Carousel";
import pokemon from "./asset/pokemon.png";
import legend_of_zelda from "./asset/legend_of_zelda.png";
import super_mario from "./asset/super_mario.png";
import { Link } from "react-router-dom";

// for slides images
const image = [{ id: pokemon }, { id: legend_of_zelda }, { id: super_mario }];

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <div className="background">
          <div className="content-container">
            <h1>
              KNOCK! KNOCK!
              <br /> THIS IS <span>AMIIBO WORLD!</span>
            </h1>
            <h3>
              Explore the world of amiibos with our extensive and limited
              library for your enjoyment! Search and browse amiibos for you to
              collect!
            </h3>
            <br />
            <Link to="/discover">
              <button className="btn-disc">Start Discovering Now</button>
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
        <div className="animationHome">
          <img
            className="pikachuRun"
            src="https://thumbs.gfycat.com/GlisteningEdibleAmericanriverotter-max-1mb.gif"
          />
          <img
            className="linkRun"
            src="https://walking-link.neocities.org/running.gif"
          />
          <img
            className="marioRun"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/eb3b5a4f-6de2-4e44-8b57-ea55bc65fc86/dckxbxg-db6c8283-8e87-497b-92bc-f1f2be4a57cf.gif"
          />
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
