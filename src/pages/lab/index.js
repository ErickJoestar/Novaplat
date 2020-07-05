import React from "react";

import Banner from "../../components/banner";

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
      <section className="learn__section">
        <h3 className="purple" style={{ fontWeight: 700, fontSize: "3.5rem" }}>
          ¿Qué te interesa aprender?
        </h3>
      </section>
    </div>
  );
};

export default Lab;
