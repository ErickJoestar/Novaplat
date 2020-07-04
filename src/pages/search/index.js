import React from "react";

import bg_image from "../../assets/images/search-image.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

import Button from "../../components/button";

const SearchPage = () => {
  const handleButtonClick = () => {};
  return (
    <div className="search-page">
      <img
        src={bg_image}
        alt={"Estudiantes aprendiendo"}
        className="search__image"
      />
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
        <div className="search__input-container">
          <input
            type="text"
            className="search__input"
            placeholder="Busca un lab aqui"
          />
          <Button
            className="search__button"
            gradient
            lightOnHover
            onClick={handleButtonClick}
          >
            <SearchIcon className="search-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
