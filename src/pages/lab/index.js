import React from "react";

import Banner from "../../components/banner";
import StyledContainer from "../../components/styled-container";

import { BANNER_HEIGHT } from "../../shared/constants";

import "./style.css";
import "../../shared/fonts.css";
const Lab = (props) => {
  console.log(props);
  return (
    <div className="lab-page">
      <Banner
        image={props.bannerUrl}
        style={{ height: BANNER_HEIGHT }}
        textStyle={{ maxWidth: "100rem" }}
        title={props.title}
      />
      <section className="lab__section">
        <StyledContainer gradient />
      </section>
    </div>
  );
};

export default Lab;
