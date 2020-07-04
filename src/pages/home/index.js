import React from "react";
import { Link } from "react-router-dom";

import SearchComponent from "../../components/search-component";
import StyledContainer from "../../components/styled-container";
import Button from "../../components/button";

import homeBanner from "../../assets/images/home-banner.jpg";
import homeBook from "../../assets/images/home-book.jpg";

import praxiLabs from "../../assets/images/Praxilabs.png";
import coSpaces from "../../assets/images/CoSpaces.png";
import tinkercad from "../../assets/images/Tinkercad.jpg";

import { ReactComponent as ScienceLogo } from "../../assets/icons/science.svg";
import { ReactComponent as CodeLogo } from "../../assets/icons/code.svg";
import { ReactComponent as Design3D } from "../../assets/icons/design3d.svg";
import { ReactComponent as Electronics } from "../../assets/icons/electronics.svg";
import { ReactComponent as AumentedRel } from "../../assets/icons/aumentedReality.svg";
import { ReactComponent as VirtualRel } from "../../assets/icons/virtualReality.svg";

import "./style.css";
import "../../shared/fonts.css";

const AREAS_DATA = [
  { label: "Ciencias", name: "science", SvgComponent: ScienceLogo, link: "/" },
  { label: "Codificación", name: "code", SvgComponent: CodeLogo, link: "/" },
  { label: "Diseño 3D", name: "design3d", SvgComponent: Design3D, link: "/" },
  {
    label: "Electrónica",
    name: "electronics",
    SvgComponent: Electronics,
    link: "/",
  },
  {
    label: "Realidad Virtual",
    name: "virtual-rel",
    SvgComponent: VirtualRel,
    link: "/",
  },
  {
    label: "Realidad Aumentada",
    name: "aumented-rel",
    SvgComponent: AumentedRel,
    link: "/",
  },
];

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
          <StyledContainer color="#CC3333" className="home__lab-container">
            <img
              src={praxiLabs}
              className="home__lab-icon home__lab-icon--praxi"
              alt="Praxilabs logo"
            />
          </StyledContainer>
          <StyledContainer
            color="linear-gradient(to right, #E58B5D, #A63CDF)"
            className="home__lab-container"
          >
            <img
              src={coSpaces}
              className="home__lab-icon home__lab-icon--cospaces"
              alt="CoSpaces Logo"
            />
          </StyledContainer>
          <StyledContainer color="#22B35A" className="home__lab-container">
            <img
              src={tinkercad}
              className="home__lab-icon home__lab-icon--tinker"
              alt="TinkerCad Logo"
            />
          </StyledContainer>
        </div>
      </section>
      <section className="home__section home__section--side">
        <img
          src={homeBook}
          alt="Mujer sosteniendo libros"
          className="home__side__image"
        />
        <div className="home__side__text-container">
          <span className="home__side-title purple">
            LOS MEJORES LABS VIRTUALES EN UN SOLO LUGAR Y A TU ALCANCE
          </span>
          <Link to="/nosotros">
            <Button shaped gradient className="home__side__button">
              ¡Conócenos!
            </Button>
          </Link>
        </div>
      </section>
      <section className="home__section">
        <h4 className="page-section-title purple">
          Descubre nuestras
          <br /> áreas de aprendizaje
        </h4>
        <div className="home__areas">
          {AREAS_DATA.map(({ label, name, SvgComponent, link }) => (
            <div className="home__areas__el--container">
              <StyledContainer gradient className="home__areas__el">
                <SvgComponent
                  className={`home__areas__svg home__areas__svg--${name}`}
                />
              </StyledContainer>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="home__section home__section__secondary-banner"></section>
    </main>
  );
};

export default Home;
