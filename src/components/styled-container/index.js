import React from "react";

import "./style.css";
import "../../shared/colors.css";

const StyledContainer = ({
  className = "",
  extStyle = {},
  extClassName = "",
  color,
  children,
  gradient,
  style = {},
  expandOnHover,
  ...props
}) => {
  return (
    <div
      className={`styled-container--back ${gradient ? "gradient-bg" : ""} ${
        expandOnHover ? "styled-container--back--expand" : ""
      } ${extClassName}`}
      style={color ? { ...style, background: color } : style}
    >
      <div className={`styled-container ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
};
export default StyledContainer;
