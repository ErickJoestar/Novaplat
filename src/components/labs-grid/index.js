import React from "react";

import StyledContainer from "../styled-container";

import "./style.css";
const LabsGrid = ({ labs, onClick, showAdd }) => {
  console.log(labs);
  return (
    <div className="lab__grid">
      {labs.map((data, i) => (
        <div key={i} className="lab__grid__el-container">
          <StyledContainer
            expandOnHover
            className="lab__grid-el"
            extClassName="lab__grid-el--ext"
            color={data.color}
          >
            <a href={data.url}>
              <img
                src={data.icon}
                alt={data.label}
                className={`lab__grid-el__img lab__grid-el__img--${data.name}`}
              />
            </a>
            {showAdd && (
              <div
                className="lab__grid-el__plus"
                style={{ background: data.color }}
                onClick={(e) => onClick(data, e)}
              />
            )}
          </StyledContainer>
        </div>
      ))}
    </div>
  );
};

export default LabsGrid;
