import React from "react";

import StyledContainer from "../styled-container";

import "./style.css";
const LabsGrid = ({
  labs,
  onClick,
  showAdd,
  className = "",
  elementClassName = "",
  elementStyle = {},
}) => {
  console.log(labs);
  return (
    <div className={`lab__grid ${className}`}>
      {labs.map((data, i) => (
        <div
          key={i}
          style={elementStyle}
          className={` lab__grid__el-container ${elementClassName}`}
        >
          <StyledContainer
            expandOnHover
            className="lab__grid-el"
            extClassName={`lab__grid-el--ext  `}
            color={data.color}
          >
            <a href={data.url}>
              <img
                src={data.icon}
                alt={data.label}
                className={`lab__grid-el__img lab__grid-el__img--${data.name}`}
              />
            </a>
          </StyledContainer>
          {showAdd && (
            <div
              className="lab__grid-el__plus"
              style={{ background: data.color }}
              onClick={(e) => onClick(data, e)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LabsGrid;
