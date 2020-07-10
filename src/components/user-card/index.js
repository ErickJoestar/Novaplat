import React from "react";

import StyledContainer from "../styled-container";

import { ReactComponent as DefaultImage } from "../../assets/icons/default-image-circle.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";

import "./style.css";
const UserCard = ({
  className = "",
  image,
  country,
  city,
  grade,
  institution,
  name,
  labs,
  showOptions = false,
  onOptionsClick,
  ...props
}) => {
  console.log(image);
  return (
    <StyledContainer squared gradient className={`user-card ${className}`}>
      <SettingsIcon onClick={onOptionsClick} className="user-card__settings" />
      <div className="user-card__image-container">
        {image ? (
          <img src={image} alt="user" className="user-card__image" />
        ) : (
          <DefaultImage className="user-card__image user-card__image--svg" />
        )}
      </div>
      <span className="user-card__name">{name}</span>
      <span className="user-card__text">{country}</span>
      <span className="user-card__text">{city}</span>
      <span className="user-card__text">{grade}</span>
      <span className="user-card__text">{institution}</span>
      {props.children && <div className="user-card__separator" />}
      {props.children}
    </StyledContainer>
  );
};

export default UserCard;
