import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import banner from "../../assets/images/auth-banner.jpg";
import { ReactComponent as Logo } from "../../assets/icons/logo-colored.svg";
import Button from "../../components/button";

import "./style.css";
import "../../shared/fonts.css";
import "../../shared/forms.css";

const AuthPage = ({ type = "signup", ...props }) => {
  const [formType, setType] = useState(type);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleTypeChange = () => {
    setType(formType === "login" ? "signup" : "login");
  };

  return (
    <div className="auth-page">
      <img src={banner} className="auth_banner" alt="Login to novaplat" />
      <Link to="/">
        <Logo className="auth-logo" />
      </Link>
      <div className="auth_change">
        <span>
          {formType === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
        </span>
        <Button
          gradient
          popOnHover
          shaped
          className="auth__change__button"
          onClick={handleTypeChange}
        >
          {formType === "login" ? "Registrate" : "Inicia Sesion"}
        </Button>
      </div>
      <div className="auth-container">
        <h3 className={`page-title-medium`}>Inicia Sesión</h3>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Escribe un correo válido")
              .required("Necesitas escribir un correo."),
            password: Yup.string()
              .required("Necesitas escribir un nombre.")
              .min(6, "La contraseña debe tener mínimo 6 caracteres."),
          })}
          onSubmit={handleSubmit}
        >
          <Form className="auth__form disable-auto-styles">
            <div className="auth__field-container">
              <Field
                name="email"
                type="email"
                placeholder="Correo"
                className="auth__input input__outline"
              />
              <ErrorMessage
                name="email"
                component={({ children }) => (
                  <span className="form__error auth__form__error ">
                    {children}
                  </span>
                )}
              />
            </div>
            <div className="auth__field-container">
              <Field
                name="password"
                type="password"
                placeholder="Contraseña"
                className="auth__input input__outline"
              />
              <ErrorMessage
                name="password"
                component={({ children }) => (
                  <span className="auth__form__error form__error">
                    {children}
                  </span>
                )}
              />
            </div>
            <div
              className="auth__input-radio__container"
              onClick={() => setRemember(!remember)}
            >
              <div
                className={`auth__radio ${
                  remember ? "auth__radio--active" : ""
                } `}
              />
              <label htmlFor="remember">Recuérdame</label>
            </div>
            <div className="auth__controls">
              <Button
                type="submit"
                gradient
                popOnHover
                shaped
                className="auth__change__button"
              >
                Iniciar Sesión
              </Button>
              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthPage;
