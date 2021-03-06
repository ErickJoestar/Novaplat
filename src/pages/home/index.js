import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import SearchComponent from "../../components/search-component";
import StyledContainer from "../../components/styled-container";
import Button from "../../components/button";
import AreasGrid from "../../components/areas-grid";

import homeBanner from "../../assets/images/home-banner.jpg";
import homeBook from "../../assets/images/home-book.jpg";
import homeChat from "../../assets/images/home-chat.jpg";

import { ReactComponent as GradientShaped } from "../../assets/icons/gradient-shaped-container.svg";

import { EXTERNAL_LABS } from "../../shared/data";

import "./style.css";
import "../../shared/fonts.css";

const externalLabs = [
  EXTERNAL_LABS.coSpaces,
  EXTERNAL_LABS.praxiLabs,
  EXTERNAL_LABS.tinkerCad,
];

const Home = () => {
  const handleInputSearch = () => {};
  const showIcon = useMediaQuery({ query: "(max-width:500px)" });

  return (
    <main className="home">
      <div
        className="home__banner"
        style={{ backgroundImage: `url("${homeBanner}")` }}
      >
        <div className="home__title-container">
          <h2 className="page-main-title">
            Un solo puente a tus labs virtuales
          </h2>
        </div>
        <SearchComponent
          className="home__search"
          type={showIcon ? "icon" : "text"}
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
          {externalLabs.map(({ label, url, icon, color, name }, i) => (
            <a
              key={i}
              href={url}
              alt={`${label} pagina principal`}
              style={{ margin: "1rem" }}
            >
              <StyledContainer
                expandOnHover
                color={color}
                className="home__lab-container"
              >
                <img
                  src={icon}
                  className={`home__lab-icon home__lab-icon--${name}`}
                  alt={`${label} icon`}
                />
              </StyledContainer>
            </a>
          ))}
        </div>
      </section>
      <section className="home__section home__section--side">
        <img
          src={homeBook}
          alt="Mujer sosteniendo libros"
          className="home__side__image"
        />
        <div className="home__side__text-container">
          <span className="home__side-title  purple">
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
        <AreasGrid />
      </section>
      <section
        className="home__section home__section__secondary-banner"
        style={{ backgroundImage: `url(${homeChat})` }}
      >
        <div className="home__section__secondary-banner__text">
          <span>
            ¡SI,! PUEDES APRENDER
            <br />
            CUALQUIER COSA.
            <br />
          </span>
          <span style={{ fontSize: "2.2rem", color: "white" }}>
            -Bill Gates
          </span>
        </div>
        <div className="home__registrate__pos">
          <div className="home__regitrate-container purple">
            <GradientShaped className="home__regitrate-container__svg" />
            <span>
              Regístrate hoy,
              <br />
              ¡Es gratis!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
