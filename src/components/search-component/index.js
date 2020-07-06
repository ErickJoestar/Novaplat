import React from "react";

import Button from "../button";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

// type="icon"
// Icon={SearchIcon}

import "./style.css";
const SearchComponent = ({
  type = "icon",
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
        {type === "icon" && <SearchIcon className="search__icon" />}
        {type === "text" && <span className="search__label">{label}</span>}
      </Button>
    </div>
  );
};

export default SearchComponent;
