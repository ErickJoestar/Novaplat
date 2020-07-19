import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";

import Banner from "../../components/banner";
import StyledContainer from "../../components/styled-container";
import LabsGrid from "../../components/labs-grid";
import Modal from "../../components/modal";

import { EXTERNAL_LABS } from "../../shared/data";

import "./style.css";
import "../../shared/fonts.css";
const Lab = ({
  label,
  labs = [],
  name,
  SvgComponent,
  bannerUrl,
  title,
  description,
}) => {
  const [modal, setModal] = useState({ open: false });
  const auth = useContext(AuthContext);
  const labsData = labs.map((labId) => EXTERNAL_LABS[labId]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddLab = async () => {
    const { data } = modal;
    setModal({ open: false });
    const newLabs = [...auth.userData.labs, data.id];
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${auth.userData.id}`,
        "PATCH",
        JSON.stringify({ labs: newLabs }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      const newUserData = { ...auth.userData };
      newUserData.labs = newLabs;
      auth.saveUser(newUserData, auth.token);
    } catch (err) {
      alert("No se pudo agregar a tu lista.");
    }
  };

  return (
    <div className="lab-page">
      {modal.open &&
        (auth.token ? (
          <Modal
            title="Agregar curso"
            message="¿Quieres agregar este curso a tus laboratorios de aprendizaje?"
            accepLabel="Aceptar"
            cancelLabel="Rechazar"
            onCancel={() => setModal({ open: false })}
            onAccept={handleAddLab}
          />
        ) : (
          <Modal
            title="Sesión inválida"
            message="Tienes que iniciar sesión para añadir este laboratorio en tu perfil."
            accepLabel="Aceptar"
            onAccept={() => setModal({ open: false })}
          />
        ))}

      <Banner
        image={bannerUrl}
        textStyle={{ maxWidth: "100rem" }}
        title={title}
      />
      <section className="lab__section">
        <StyledContainer
          gradient
          extClassName="lab__icon-container--ext"
          className="lab__icon-container"
        >
          <SvgComponent className="lab__icon-svg" />
          <p>{description}</p>
        </StyledContainer>
        <h3 className="lab__section__title purple">
          Labs Recomendados <br /> para este aprendizaje
        </h3>
        <LabsGrid
          labs={labsData}
          showAdd
          onClick={(data) => setModal({ open: true, data })}
        />
      </section>
    </div>
  );
};

export default Lab;
