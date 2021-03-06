import React from "react";

import "./style.css";
import "../../shared/fonts.css";

const Banner = ({
  image,
  className = "",
  style = {},
  alt = "",
  title,
  subtitle,
  imageClassName = "",
  imageStyle = {},
  textClassName = "",
  textStyle = {},
  ...props
}) => {
  return (
    <div
      className={`banner ${className}`}
      style={{ ...style, backgroundImage: `url(${image})` }}
    >
      <div
        className={`banner__text-container ${textClassName}`}
        style={textStyle}
      >
        {title && <h3 className="page-main-title banner__title">{title}</h3>}
        {subtitle && <h4 className="page-sub-title">{subtitle}</h4>}
      </div>
    </div>
  );
};

export default Banner;
