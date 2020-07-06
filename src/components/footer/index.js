import React from "react";

import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";

import "./style.css";
import "../../shared/colors.css";

const Footer = () => {
  const breakFooter = useMediaQuery({ query: "(max-device-width:650px)" });

  return (
    <footer className="footer gradient-bg">
      <div className="footer__content">
        <div className="footer__icon">
          <Logo />
        </div>
        <div className="footer__side">
          <ul className="footer__list">
            <li>
              <Link to="/" className="footer__el">
                Únete a novaplat
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__el">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__el">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__el">
                Aprendizaje
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__rights">
          Novaplat 2020. {breakFooter ? <br /> : ""} Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
