import React from "react";

import Button from "../button";

import "./style.css";
const SearchComponent = ({
  type = "icon",
  Icon,
  label = "",
  placeholder = "",
  className = "",
  onClick = () => null,
}) => {
  return (
    <div className={`search__input-container ${className}`}>
      <input type="text" className="search__input" placeholder={placeholder} />
      <Button
        className={`search__button search__button--${type}`}
        gradient
        lightOnHover
        onClick={onClick}
      >
        {type === "icon" && <Icon className="search__icon" />}
        {type === "text" && <span className="search__label">{label}</span>}
      </Button>
    </div>
  );
};

export default SearchComponent;
