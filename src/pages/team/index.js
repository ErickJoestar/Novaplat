import React from "react";

import banner from "../../assets/images/nosotros-banner.jpg";
import team from "../../assets/images/nosotros-team.jpg";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team__banner">
        <img src={banner} className="team__img" alt="" />
        <div className="team__text-container">
          <h2 className="page-main-title">
            Somos el puente a tus labs virtuales
          </h2>
          <span className="page-sub-title">
            Te ayudamos a localizar tu lab virtual que necesitas para llevar tus
            proyectos a la realidad.
          </span>
        </div>
      </div>
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
