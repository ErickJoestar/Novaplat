import React from "react";

import "./style.css";
import "../../shared/colors.css";

const StyledContainer = ({
  className = "",
  style = {},
  color,
  children,
  gradient,
  ...props
}) => {
  return (
    <div
      className={`styled-container--back ${gradient ? "gradient-bg" : ""} `}
      style={color ? { ...style, background: color } : style}
    >
      <div className={`styled-container ${className}`}>{children}</div>
    </div>
  );
};
export default StyledContainer;
