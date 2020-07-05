import React from "react";
import { Link } from "react-router-dom";

import StyledContainer from "../../components/styled-container";
import { LABS_DATA } from "../../shared/data";

import "./style.css";

const AreasGrid = () => {
  return (
    <div className="areas">
      {LABS_DATA.map(({ label, name, SvgComponent, link }) => (
        <Link to={`/aprender/${name}`} className="areas__el--container">
          <StyledContainer gradient expandOnHover className="areas__el">
            <SvgComponent className={`areas__svg areas__svg--${name}`} />
          </StyledContainer>
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};
export default AreasGrid;
