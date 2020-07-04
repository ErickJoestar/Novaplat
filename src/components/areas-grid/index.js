import React from "react";

import StyledContainer from "../../components/styled-container";

import { ReactComponent as ScienceLogo } from "../../assets/icons/science.svg";
import { ReactComponent as CodeLogo } from "../../assets/icons/code.svg";
import { ReactComponent as Design3D } from "../../assets/icons/design3d.svg";
import { ReactComponent as Electronics } from "../../assets/icons/electronics.svg";
import { ReactComponent as AumentedRel } from "../../assets/icons/aumentedReality.svg";
import { ReactComponent as VirtualRel } from "../../assets/icons/virtualReality.svg";

import "./style.css";

const AREAS_DATA = [
  { label: "Ciencias", name: "science", SvgComponent: ScienceLogo, link: "/" },
  { label: "Codificación", name: "code", SvgComponent: CodeLogo, link: "/" },
  { label: "Diseño 3D", name: "design3d", SvgComponent: Design3D, link: "/" },
  {
    label: "Electrónica",
    name: "electronics",
    SvgComponent: Electronics,
    link: "/",
  },
  {
    label: "Realidad Virtual",
    name: "virtual-rel",
    SvgComponent: VirtualRel,
    link: "/",
  },
  {
    label: "Realidad Aumentada",
    name: "aumented-rel",
    SvgComponent: AumentedRel,
    link: "/",
  },
];

const AreasGrid = () => {
  return (
    <div className="areas">
      {AREAS_DATA.map(({ label, name, SvgComponent, link }) => (
        <div className="areas__el--container">
          <StyledContainer gradient className="areas__el">
            <SvgComponent className={`areas__svg areas__svg--${name}`} />
          </StyledContainer>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};
export default AreasGrid;
