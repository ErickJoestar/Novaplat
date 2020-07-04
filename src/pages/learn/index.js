import React from "react";

import Banner from "../../components/banner";

import { BANNER_HEIGHT } from "../../shared/constants";

import learnBanner from "../../assets/images/learn-banner.jpg";

import "./style.css";
const Learn = () => {
  return (
    <div className="learn">
      <Banner
        image={learnBanner}
        style={{ height: BANNER_HEIGHT }}
        textStyle={{ maxWidth: "83rem" }}
        title="Hoy es un buen día para crear algo nuevo"
        subtitle="Te ayudamos a localizar tu lab virtual que necesitas para llevar tus
            proyectos a la realidad."
      />
    </div>
  );
};

export default Learn;
