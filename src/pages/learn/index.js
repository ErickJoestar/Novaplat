import React from "react";

import Banner from "../../components/banner";
import AreasGrid from "../../components/areas-grid";

import { BANNER_HEIGHT } from "../../shared/constants";

import learnBanner from "../../assets/images/learn-banner.jpg";

import "./style.css";
import "../../shared/fonts.css";

const Learn = () => {
  return (
    <div className="learn">
      <Banner
        image={learnBanner}
        style={{ height: BANNER_HEIGHT }}
        textStyle={{ maxWidth: "100rem" }}
        title="Hoy es un buen día para crear algo nuevo"
        subtitle="Te ayudamos a hacer realidad tus proyectos."
      />
      <section className="learn__section">
        <h3 className="purple" style={{ fontWeight: 700, fontSize: "3.5rem" }}>
          ¿Qué te interesa aprender?
        </h3>
        <AreasGrid />
      </section>
    </div>
  );
};

export default Learn;
