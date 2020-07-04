import React from "react";

import SearchComponent from "../../components/search-component";
import StyleContainer from "../../components/styled-container";

import homeBanner from "../../assets/images/home-banner.jpg";
import praxiLabs from "../../assets/images/Praxilabs.png";
import coSpaces from "../../assets/images/CoSpaces.png";
import tinkercad from "../../assets/images/Tinkercad.jpg";

import "./style.css";
import "../../shared/fonts.css";

const Home = () => {
  const handleInputSearch = () => {};

  return (
    <main className="home">
      <div className="home__banner">
        <img
          src={homeBanner}
          alt="Dos mujeres viendo una pantalla"
          className="home__banner__img"
        />
        <div className="home__title-container">
          <h2 className="page-main-title">
            Un solo puente a tus labs virtuales
          </h2>
        </div>
        <SearchComponent
          className="home__search"
          type="text"
          label="Buscar Labs"
          placeholder="¿Qué te interesa aprender?"
          onClick={handleInputSearch}
        />
      </div>
      <section className="home__section">
        <h4 className="page-section-title purple">
          ¡BUSCAMOS LO MEJOR PARA TI!
        </h4>
        <span className="page-sub-title black ">
          En Novaplat analizamos cada laboratorio tecnocreativo virtual para
          ofrecerte solo lo mejor.
        </span>
        <div className="flex-container mg-bottom mg-top">
          <StyleContainer color="#CC3333" className="home__lab-container">
            <img
              src={praxiLabs}
              className="home__lab-icon home__lab-icon--praxi"
              alt="Praxilabs logo"
            />
          </StyleContainer>
          <StyleContainer
            color="linear-gradient(to right, #E58B5D, #A63CDF)"
            className="home__lab-container"
          >
            <img
              src={coSpaces}
              className="home__lab-icon home__lab-icon--cospaces"
              alt="CoSpaces Logo"
            />
          </StyleContainer>
          <StyleContainer color="#22B35A" className="home__lab-container">
            <img
              src={tinkercad}
              className="home__lab-icon home__lab-icon--tinker"
              alt="TinkerCad Logo"
            />
          </StyleContainer>
        </div>
      </section>
    </main>
  );
};

export default Home;
