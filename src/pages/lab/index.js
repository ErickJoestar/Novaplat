import React, { useEffect } from "react";

import Banner from "../../components/banner";
import StyledContainer from "../../components/styled-container";

import "./style.css";
import "../../shared/fonts.css";
const Lab = ({
  label,
  labs = [],
  name,
  SvgComponent,
  bannerUrl,
  title,
  description,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLabClick = (data, event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(data);
    alert(`No pasa nada todavia :P, ${JSON.stringify(data)}`);
  };
  return (
    <div className="lab-page">
      <Banner
        image={bannerUrl}
        textStyle={{ maxWidth: "100rem" }}
        title={title}
      />
      <section className="lab__section">
        <StyledContainer
          gradient
          extClassName="lab__icon-container--ext"
          className="lab__icon-container"
        >
          <SvgComponent className="lab__icon-svg" />
          <p>{description}</p>
        </StyledContainer>
        <h3 className="lab__section__title purple">
          Labs Recomendados <br /> para este aprendizaje
        </h3>
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
                    alt={label}
                    className={`lab__grid-el__img lab__grid-el__img--${data.name}`}
                  />
                </a>

                <div
                  className="lab__grid-el__plus"
                  style={{ background: data.color }}
                  onClick={(e) => handleLabClick(data, e)}
                />
              </StyledContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lab;
