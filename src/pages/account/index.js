import React, { useContext, useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../context/auth-context";

import UserCard from "../../components/user-card";
import StyledContainer from "../../components/styled-container";
import AreasGrid from "../../components/areas-grid";
import LabsGrid from "../../components/labs-grid";
import Button from "../../components/button";

import { EXTERNAL_LABS, LABS_DATA } from "../../shared/data";
import countrysData from "../../shared/countrys";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

const Account = () => {
  const auth = useContext(AuthContext);
  const [option, setOption] = useState("areas");
  const [labs, setLabs] = useState([]);
  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!auth.token) return;

    const labs = auth.userData.labs.map((id) => EXTERNAL_LABS[id]);

    const areas = [];
    labs.forEach((lab) => {
      const index = areas.findIndex((area) => area.name === lab.group);
      if (index === -1) {
        areas.push({
          ...LABS_DATA.find((area) => area.name === lab.group),
          labs: [lab],
        });
      } else {
        areas[index].labs.push(lab);
      }
    });
    setLabs(labs);
    setAreas(areas);
  }, [auth]);

  const handleUpdate = (data) => {
    setIsLoading(true);
  };

  return (
    <React.Fragment>
      <div className="account__banner-colored" />
      <div className="account">
        <UserCard {...auth.userData} onOptionsClick={() => setOption("config")}>
          <StyledContainer
            gradient
            expandOnHover
            extClassName="user-card__button--ext"
            className={`user-card__button ${
              option === "learn" ? "selected" : ""
            }`}
            onClick={() => setOption("learn")}
          >
            Comenzar a aprender
          </StyledContainer>
          <StyledContainer
            gradient
            expandOnHover
            extClassName="user-card__button--ext"
            className={`user-card__button ${
              option === "areas" ? "selected" : ""
            }`}
            onClick={() => setOption("areas")}
          >
            Áreas de aprendizaje
          </StyledContainer>
          <StyledContainer
            gradient
            expandOnHover
            extClassName="user-card__button--ext"
            className={`user-card__button ${
              option === "labs" ? "selected" : ""
            }`}
            onClick={() => setOption("labs")}
          >
            Tus laboratorios
          </StyledContainer>
        </UserCard>
        <div className="account__content">
          {auth.userData && auth.userData.labs.length === 0 && (
            <h3 className="subtitle-medium purple">
              Selecciona alguno laboratorio y apareceran aquí.
            </h3>
          )}
          {auth.userData && option === "areas" && (
            <React.Fragment>
              <h3 className="subtitle-medium purple">Áreas de aprendizaje.</h3>
              <AreasGrid labs={areas} />
            </React.Fragment>
          )}
          {auth.userData && option === "labs" && (
            <React.Fragment>
              <h3 className="subtitle-medium purple">Tus laboratorios.</h3>
              <LabsGrid labs={labs} />
            </React.Fragment>
          )}
          {auth.userData && option === "config" && (
            <React.Fragment>
              <h3 className="subtitle-medium purple">
                Configuración de la cuenta.
              </h3>
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
                  city: Yup.string().required(
                    "Tienes que escribir una ciudad."
                  ),
                })}
                onSubmit={handleUpdate}
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
                      gradient
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
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
