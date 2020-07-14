import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import { useHttpClient } from "../../hooks/http-hook";
import { useMediaQuery } from "react-responsive";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import banner from "../../assets/images/auth-banner.jpg";
import { ReactComponent as Logo } from "../../assets/icons/logo-colored.svg";
import Button from "../../components/button";
import Modal from "../../components/modal";

import countrysData from "../../shared/countrys";

import "./style.css";
import "../../shared/fonts.css";
import "../../shared/forms.css";

const AuthPage = ({ type = "signup", ...props }) => {
  const [formType, setType] = useState(type);
  const [remember, setRemember] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const changeStructure = useMediaQuery({ query: "(max-width:750px)" });

  const handleTypeChange = () => {
    setType(formType === "login" ? "signup" : "login");
  };

  const handleLogin = async (data) => {
    if (isLoading) return;
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        "POST",
        JSON.stringify({ ...data, labs: [] }),
        { "Content-Type": "application/json" }
      );
      auth.login(responseData.userData, responseData.token);
      history.goBack();
    } catch (err) {}
  };

  const handleSignup = async (data) => {
    if (isLoading) return;
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/signup",
        "POST",
        JSON.stringify({ ...data, labs: [] }),
        { "Content-Type": "application/json" }
      );
      console.log(responseData);
      auth.login(responseData.userData, responseData.token);
      history.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      {error && (
        <Modal
          accepLabel={"Aceptar"}
          onAccept={clearError}
          title="Error"
          message="Hubo un error al momento de autenticar tu cuenta, por favor vuelve a intentar."
        />
      )}
      <div
        className="auth-page"
        style={changeStructure ? null : { backgroundImage: `url(${banner})` }}
      >
        {!changeStructure && (
          <Link to="/">
            <Logo className="auth-logo" />
          </Link>
        )}
        <div className="auth_change">
          <span>
            {formType === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          </span>
          <Button
            gradient={!changeStructure}
            outline={changeStructure}
            popOnHover
            shaped
            className="auth__change__button"
            onClick={handleTypeChange}
          >
            {formType === "login" ? "Registrate" : "Inicia Sesion"}
          </Button>
        </div>
        {formType === "login" ? (
          <div className="auth-container ">
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
              onSubmit={handleLogin}
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
                    gradient={!changeStructure}
                    outline={changeStructure}
                    popOnHover
                    shaped
                    disabled={isLoading}
                    className="auth__change__button"
                  >
                    {isLoading ? "Iniciando sesion" : "Iniciar Sesión"}
                  </Button>
                  <Link to="/">¿Olvidaste tu contraseña?</Link>
                </div>
              </Form>
            </Formik>
          </div>
        ) : (
          <div className="auth-container ">
            <h3 className={`page-title-medium`}>Inicia Sesión</h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                grade: "",
                institution: "",
                country: "",
                city: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Necesitas escribir un nombre"),
                email: Yup.string()
                  .email("Escribe un correo válido")
                  .required("Necesitas escribir un correo."),
                password: Yup.string()
                  .required("Necesitas escribir una contraseña.")
                  .min(6, "La contraseña debe tener mínimo 6 caracteres."),
                passwordConfirmation: Yup.string()
                  .required("Necesitas escribir una contraseña")
                  .min(6, "La contraseña debe tener mínimo 6 caracteres.")
                  .test(
                    "passwords-match",
                    "Las contraseñas deben coincidir",
                    function (pass) {
                      return this.parent.password === pass;
                    }
                  ),
                grade: Yup.string().required(
                  "Tienes que elegir un nivel educativo."
                ),
                institution: Yup.string().required(
                  "Tienes que escribir una institución."
                ),
                country: Yup.string().required("Tienes que elegir un país."),
                city: Yup.string().required("Tienes que escribir una ciudad."),
              })}
              onSubmit={handleSignup}
            >
              <Form className="auth__form auth__form--signup disable-auto-styles">
                <div className="auth__field-container">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Nombre*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="name"
                    component={({ children }) => (
                      <span className="form__error auth__form__error ">
                        {children}
                      </span>
                    )}
                  />
                </div>
                <div className="auth__field-container">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Correo eletrónico*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="email"
                    component={({ children }) => (
                      <span className="auth__form__error form__error">
                        {children}
                      </span>
                    )}
                  />
                </div>

                <div className="auth__field-container">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Contraseña*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="password"
                    component={({ children }) => (
                      <span className="form__error auth__form__error ">
                        {children}
                      </span>
                    )}
                  />
                </div>
                <div className="auth__field-container">
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Repite la contraseña*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component={({ children }) => (
                      <span className="auth__form__error form__error">
                        {children}
                      </span>
                    )}
                  />
                </div>

                <div className="auth__field-container">
                  <Field
                    name="grade"
                    as="select"
                    placeholder="Tu grado de estudios"
                    className="auth__input input__outline input__select"
                  >
                    <option value="" selected disabled hidden>
                      Tu grado de estudios
                    </option>
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                    <option value="media superior">Media superior</option>
                    <option value="superior">Superior</option>
                  </Field>
                  <ErrorMessage
                    name="grade"
                    component={({ children }) => (
                      <span className="form__error auth__form__error ">
                        {children}
                      </span>
                    )}
                  />
                </div>
                <div className="auth__field-container">
                  <Field
                    name="institution"
                    type="text"
                    placeholder="Institución educativa*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="institution"
                    component={({ children }) => (
                      <span className="auth__form__error form__error">
                        {children}
                      </span>
                    )}
                  />
                </div>
                <div className="auth__field-container">
                  <Field
                    name="country"
                    as="select"
                    placeholder="País"
                    className="auth__input input__outline input__select"
                    selected="Mexico"
                  >
                    <option value="" selected disabled hidden>
                      País
                    </option>
                    {countrysData.map(({ name }, i) => (
                      <option value={name} key={i}>
                        {name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component={({ children }) => (
                      <span className="form__error auth__form__error ">
                        {children}
                      </span>
                    )}
                  />
                </div>
                <div className="auth__field-container">
                  <Field
                    name="city"
                    type="text"
                    placeholder="Ciudad*"
                    className="auth__input input__outline"
                  />
                  <ErrorMessage
                    name="city"
                    component={({ children }) => (
                      <span className="auth__form__error form__error">
                        {children}
                      </span>
                    )}
                  />
                </div>

                <div className="auth__controls">
                  <Button
                    type="submit"
                    gradient={!changeStructure}
                    outline={changeStructure}
                    popOnHover
                    shaped
                    disabled={isLoading}
                    className="auth__change__button"
                  >
                    {isLoading ? "Creando cuenta" : "Regístrate"}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
