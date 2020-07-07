import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { slide as MobileMenu } from "react-burger-menu";

import { useMediaQuery } from "react-responsive";

import "./style.css";
import "../../shared/colors.css";

import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const Header = ({ selection, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const history = useHistory();
  const burguerNav = useMediaQuery({ query: "(max-device-width:800px)" });

  useEffect(() => {
    const listener = (e) => {
      if (!scrolled && window.scrollY > 150) {
        setScrolled(true);
      } else if (scrolled && window.scrollY < 150) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [scrolled]);

  useEffect(() => {
    setOpenMenu(false);
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  if (burguerNav) {
    return (
      <React.Fragment>
        <MobileMenu isOpen={openMenu} right>
          <div className="header__burger__icons">
            <div className="header__logo-container">
              <Logo className="header__logo" />
            </div>
            <div className="header__burguer__controls-container">
              <Link to="/" className="header__icon-container--mobile">
                <SearchIcon />
              </Link>
              <div
                className="header__icon-container--mobile"
                onClick={() => setOpenMenu(false)}
              >
                <CloseIcon fill="white" />
              </div>
            </div>
          </div>
          <ul className="header__burger__items-container">
            <li className="header__burger__item">
              <Link to="/aprender">Aprendizaje</Link>
            </li>
            <li className="header__burger__item">
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className="header__burger__item">
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
          <ul className="header__burger__items-container header__burger__items-container--bottom">
            <li className="header__burger__item">
              <Link to="/login">Inicial sesion</Link>
            </li>
            <li className="header__burger__item">
              <Link to="/signup">Registrarse</Link>
            </li>
          </ul>
        </MobileMenu>
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div
            className={`header__bg ${
              scrolled ? `gradient-bg` : "gradient-transparent"
            }`}
          />
          <Link to="/" className="header__logo-container">
            <Logo className="header__logo" />
          </Link>
          <div className="header__icons--mobile">
            <Link to="/buscar">
              <div className="header__icon-container--mobile">
                <SearchIcon />
              </div>
            </Link>
            <div
              className="header__icon-container--mobile"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon fill="white" />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }

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
