import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./style.css";
import "../../shared/colors.css";

import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = ({ selection, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const listener = (e) => {
      if (!scrolled && window.scrollY > 200) {
        setScrolled(true);
      } else if (scrolled && window.scrollY < 200) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [scrolled]);

  useEffect(() => {
    console.log("???");
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  // console.log(history);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div
        className={`header__bg ${
          scrolled ? `gradient-bg` : "gradient-transparent"
        }`}
      />
      <div className="auth">
        <Link to="/login" className="header__auth">
          Inicar sesion
        </Link>
        <Link to="/signup" className="header__auth">
          Registrarse
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__logo-container">
          <Logo className="header__logo" />
        </Link>
        <ul className="nav__list">
          <li>
            <Link
              to="/aprender"
              className={`nav__el ${
                selection === "learn" ? "nav__active" : ""
              }`}
            >
              Aprendizaje
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className={`nav__el ${selection === "team" ? "nav__active" : ""}`}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={`nav__el ${
                selection === "contact" ? "nav__active" : ""
              }`}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/buscar"
              className={`nav__el ${
                selection === "search" ? "nav__active" : ""
              }`}
            >
              <div className="nav__search-container">
                <SearchIcon className="nav__search-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
