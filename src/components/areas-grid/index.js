import React from "react";
import { Link } from "react-router-dom";

import StyledContainer from "../../components/styled-container";
import { LABS_DATA } from "../../shared/data";

import "./style.css";

const AreasGrid = ({
  labs,
  showLabel = true,
  className = "",
  elementStyle = {},
  elementClassName = "",
}) => {
  const labsData = labs || LABS_DATA;
  return (
    <div className={`areas ${className}`}>
      {labsData.map(({ label, name, SvgComponent, link }, i) => (
        <Link
          key={i}
          to={`/aprender/${name}`}
          className={`areas__el--container ${elementClassName}`}
          style={elementStyle}
        >
          <StyledContainer gradient expandOnHover className="areas__el">
            <SvgComponent className={`areas__svg areas__svg--${name}`} />
          </StyledContainer>
          {showLabel && <span>{label}</span>}
        </Link>
      ))}
    </div>
  );
};
export default AreasGrid;
