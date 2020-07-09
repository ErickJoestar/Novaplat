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
  squared = false,
  style = {},
  expandOnHover,
  ...props
}) => {
  const newExtStyle = { ...extStyle };
  const newStyle = { ...style };
  if (color) newExtStyle.background = color;
  if (squared) {
    newExtStyle.borderRadius = 0;
    newStyle.borderRadius = 0;
  }

  return (
    <div
      className={`styled-container--back ${gradient ? "gradient-bg" : ""} ${
        expandOnHover ? "styled-container--back--expand" : ""
      } ${extClassName}`}
      style={newExtStyle}
      {...props}
    >
      <div className={`styled-container ${className}`} style={newStyle}>
        {children}
      </div>
    </div>
  );
};
export default StyledContainer;
