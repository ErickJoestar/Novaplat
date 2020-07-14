import React, { useContext, useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../context/auth-context";

import { useHttpClient } from "../../hooks/http-hook";

import UserCard from "../../components/user-card";
import StyledContainer from "../../components/styled-container";
import AreasGrid from "../../components/areas-grid";
import LabsGrid from "../../components/labs-grid";
import Button from "../../components/button";
import ImageUpload from "../../components/image-upload";
import Modal from "../../components/modal";

import { EXTERNAL_LABS, LABS_DATA } from "../../shared/data";
import countrysData from "../../shared/countrys";

import "./style.css";
import "../../shared/colors.css";
import "../../shared/fonts.css";

const Account = () => {
  const auth = useContext(AuthContext);
  const [option, setOption] = useState("config");
  const [labs, setLabs] = useState([]);
  const [areas, setAreas] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [image, setImage] = useState(null);

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

  const handleImageUpload = (file, isValid) => {
    if (file.size > 500000) {
    } else {
      setImage(file);
    }
  };

  const handleUpdate = async (data) => {
    if (isLoading) return;
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${auth.userData.id}`,
        "PATCH",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      auth.login(responseData, auth.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {error && (
        <Modal
          title="Error"
          message="Ocurrió un error al modificar tu perfil, intentalo de nuevo."
          onAccept={clearError}
          accepLabel="Aceptar"
        />
      )}
      <div className="account__banner-colored" />
      <div className="account">
        <UserCard
          {...auth.userData}
          image={
            auth.userData && auth.userData.image
              ? `${process.env.REACT_APP_ASSETS_URL}/${auth.userData.image}`
              : undefined
          }
          onOptionsClick={() => setOption("config")}
        >
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
              <AreasGrid
                labs={areas}
                elementClassName="areas-grid__element"
                showLabel={false}
              />
            </React.Fragment>
          )}
          {auth.userData && option === "labs" && (
            <React.Fragment>
              <h3 className="subtitle-medium purple">Tus laboratorios.</h3>
              <div className="flex-container">
                <LabsGrid labs={labs} elementClassName="labs-grid__element" />
              </div>
            </React.Fragment>
          )}
          {auth.userData && option === "config" && (
            <React.Fragment>
              <h3 className="subtitle-medium purple">
                Configuración de la cuenta.
              </h3>
              <div className="account__input__image-container">
                <ImageUpload onInput={handleImageUpload} />
              </div>
              <Formik
                initialValues={{
                  name: auth.userData.name,
                  email: auth.userData.email,
                  grade: auth.userData.grade,
                  institution: auth.userData.institution,
                  country: auth.userData.country,
                  city: auth.userData.city,
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Necesitas escribir un nombre"),
                  email: Yup.string()
                    .email("Escribe un correo válido")
                    .required("Necesitas escribir un correo."),
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
                <Form className="account__form disable-auto-styles--black">
                  <label htmlFor="name">Nombre completo</label>
                  <div className="account__input-container account__input-container--big">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Nombre*"
                      className="account__input account__input--big"
                    />
                    <ErrorMessage
                      name="name"
                      component={({ children }) => (
                        <span className="form__error account__form__error ">
                          {children}
                        </span>
                      )}
                    />
                  </div>
                  <label htmlFor="email">Correo</label>
                  <div className="account__input-container account__input-container--big">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Correo eletrónico*"
                      className="account__input account__input--big"
                    />
                    <ErrorMessage
                      name="email"
                      component={({ children }) => (
                        <span className="account__form__error form__error">
                          {children}
                        </span>
                      )}
                    />
                  </div>
                  <label htmlFor="grade">Grado de estudios</label>
                  <div className="account__input-container">
                    <Field
                      name="grade"
                      as="select"
                      placeholder="Tu grado de estudios"
                      className="account__input account__input--select"
                    >
                      <option value="primaria">Primaria</option>
                      <option value="secundaria">Secundaria</option>
                      <option value="media superior">Media superior</option>
                      <option value="superior">Superior</option>
                    </Field>
                    <ErrorMessage
                      name="grade"
                      component={({ children }) => (
                        <span className="form__error account__form__error ">
                          {children}
                        </span>
                      )}
                    />
                  </div>

                  <label htmlFor="institution">Institucion educativa</label>
                  <div className="account__input-container">
                    <Field
                      name="institution"
                      type="text"
                      placeholder="Institución educativa*"
                      className="account__input"
                    />
                    <ErrorMessage
                      name="institution"
                      component={({ children }) => (
                        <span className="account__form__error form__error">
                          {children}
                        </span>
                      )}
                    />
                  </div>
                  <label htmlFor="country">Pais</label>
                  <div className="account__input-container">
                    <Field
                      name="country"
                      as="select"
                      placeholder="País"
                      className="account__input account__input--select"
                      selected="Mexico"
                    >
                      {countrysData.map(({ name }, i) => (
                        <option value={name} key={i}>
                          {name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component={({ children }) => (
                        <span className="form__error account__form__error ">
                          {children}
                        </span>
                      )}
                    />
                  </div>
                  <label htmlFor="city">Ciudad</label>
                  <div className="account__input-container">
                    <Field
                      name="city"
                      type="text"
                      placeholder="Ciudad*"
                      className="account__input"
                    />
                    <ErrorMessage
                      name="city"
                      component={({ children }) => (
                        <span className="account__form__error form__error">
                          {children}
                        </span>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    gradient
                    popOnHover
                    shaped
                    disabled={isLoading}
                    className="account__form__button"
                  >
                    Actualizar
                  </Button>
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
