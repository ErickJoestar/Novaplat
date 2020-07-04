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
  ...props
}) => {
  return (
    <div
      className={`styled-container--back ${gradient ? "gradient-bg" : ""} `}
      style={color ? { ...style, background: color } : style}
    >
      <div className={`styled-container ${className}`} style={innerStyle}>
        {children}
      </div>
    </div>
  );
};
export default StyledContainer;
