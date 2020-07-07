import React from "react";

import { useMediaQuery } from "react-responsive";

import SearchComponent from "../../components/search-component";
import Banner from "../../components/banner";

import bg_image from "../../assets/images/search-image.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

const SearchPage = () => {
  const handleButtonClick = () => {};
  const changeBanner = useMediaQuery({ query: "(max-device-width:800px)" });

  if (changeBanner)
    return (
      <div className="search-page-mobile">
        <Banner
          image={bg_image}
          title="¿Qué te interesa aprender?"
          subtitle="Coloca las palabras claves en el buscador."
        />
        <section className="search-page__section">
          <div className="search-page__search-container">
            <SearchComponent
              type="icon"
              Icon={SearchIcon}
              onClick={handleButtonClick}
              placeholder="Busca un lab aqui"
            />
          </div>
        </section>
      </div>
    );
  return (
    <div
      className="search-page"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="bg-black-gradient mask" />
      <div className="search__content">
        <div className="search__text-container">
          <h2 className="search__main page-main-title">
            ¿Qué te interesa aprender?
          </h2>
          <span className="search__sub page-sub-title">
            Coloca las palabras claves en el buscador.
          </span>
        </div>
        <SearchComponent
          type="icon"
          Icon={SearchIcon}
          onClick={handleButtonClick}
          placeholder="Busca un lab aqui"
        />
      </div>
    </div>
  );
};

export default SearchPage;
