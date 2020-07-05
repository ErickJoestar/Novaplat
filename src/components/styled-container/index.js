import React from "react";

import "./style.css";
import "../../shared/colors.css";

const StyledContainer = ({
  className = "",
  style = {},
  color,
  children,
  gradient,
  innerStyle = {},
  expandOnHover,
  ...props
}) => {
  return (
    <div
      className={`styled-container--back ${gradient ? "gradient-bg" : ""} ${
        expandOnHover ? "styled-container--back--expand" : ""
      }`}
      style={color ? { ...style, background: color } : style}
    >
      <div className={`styled-container ${className}`} style={innerStyle}>
        {children}
      </div>
    </div>
  );
};
export default StyledContainer;
