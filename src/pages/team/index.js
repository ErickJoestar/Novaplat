import React from "react";

import Banner from "../../components/banner";

import banner from "../../assets/images/nosotros-banner.jpg";
import team from "../../assets/images/nosotros-team.jpg";

import { BANNER_HEIGHT } from "../../shared/constants";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

const Team = () => {
  return (
    <div className="team">
      <Banner
        image={banner}
        title="Somos el puente a tus labs virtuales"
        subtitle="Te ayudamos a localizar tu lab virtual que necesitas para llevar tus
            proyectos a la realidad."
        style={{ height: BANNER_HEIGHT }}
      />
      <section>
        <div className="team__about">
          <h3 className="subtitle-medium purple">¡Bienvenido a novaplat!</h3>
          <p>
            <span className=" purple">Novaplat</span> es una plataforma digital
            dedicado a ayudar a jóvenes estudiantes a encontrar el laboratorio
            tecnocreativo virtual que necesitan para llevar a cabo sus proyectos
            escolares, profesionales, de emprendimiento, entretenimiento, etc.
            Nuestra misión es lograr que todos puedan hacer casi cualquier cosa.
            <span className="purple">¡Anímate a unirte a nosotros!</span>
          </p>
        </div>
        <img
          src={team}
          className="team__about-img"
          alt="people looking at computer"
        />
      </section>
    </div>
  );
};

export default Team;
