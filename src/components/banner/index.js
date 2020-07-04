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
  ...props
}) => {
  return (
    <div className={`banner ${className}`} style={style}>
      <img
        src={image}
        style={{ ...imageStyle }}
        className={`banner-image ${imageClassName}`}
        alt={alt}
      />
      <div className="banner__text-container">
        {title && <h3 className="page-main-title banner__title">{title}</h3>}
        {subtitle && <h4 className="page-sub-title">{subtitle}</h4>}
      </div>
    </div>
  );
};

export default Banner;
