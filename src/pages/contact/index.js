import React from "react";

import { useMediaQuery } from "react-responsive";

import Button from "../../components/button";
import Banner from "../../components/banner";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import banner from "../../assets/images/contact-banner.jpg";

import "./style.css";
import "../../shared/fonts.css";
import "../../shared/colors.css";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Contact = () => {
  const changeBanner = useMediaQuery({ query: "(max-device-width:800px)" });

  const handleSumit = (values, { setSubmiting }) => {
    setTimeout(() => {
      setSubmiting(false);
    }, 400);
  };

  const FormComponent = () => (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Necesitas escribir un nombre."),
        email: Yup.string()
          .email("Escribe un correo válido")
          .required("Necesitas escribir un correo."),
        phone: Yup.string().matches(phoneRegExp, "Numero telefónico inválido."),
        message: Yup.string()
          .min(10, "Escribe al menos 10 caracteres")
          .required("Tienes que escribir un mensaje."),
      })}
      onSubmit={handleSumit}
    >
      <Form className="contact__form">
        <Field
          name="name"
          type="text"
          placeholder="Nombre*"
          className="contact__input"
        />
        <ErrorMessage
          name="name"
          component={({ children }) => (
            <span className="contact-error">{children}</span>
          )}
        />
        <Field
          name="email"
          type="email"
          placeholder="Correo*"
          className="contact__input"
        />
        <ErrorMessage
          name="email"
          component={({ children }) => (
            <span className="contact-error">{children}</span>
          )}
        />
        <Field
          name="phone"
          type="text"
          placeholder="Telefono"
          className="contact__input"
        />
        <ErrorMessage
          name="phone"
          component={({ children }) => (
            <span className="contact-error">{children}</span>
          )}
        />
        <Field
          className="contact__input"
          name="message"
          type="text"
          placeholder="Comentarios*"
          as="textarea"
        />
        <ErrorMessage
          name="message"
          component={({ children }) => (
            <span className="contact-error">{children}</span>
          )}
        />
        <Button
          type="submit"
          shaped
          gradient
          popOnHover
          className="contact-button"
        >
          Enviar
        </Button>
      </Form>
    </Formik>
  );

  return (
    <div className="contact">
      {changeBanner ? (
        <React.Fragment>
          <Banner
            image={banner}
            title="¿PODEMOS AYUDARTE?"
            subtitle="Llena el formulario de contacto y cuentanos que necesitas."
          />
          <section className="contact__section">
            <FormComponent />
          </section>
        </React.Fragment>
      ) : (
        <div
          className="contact__banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="contact__text-container">
            <h2 className="page-main-title">¿PODEMOS AYUDARTE?</h2>
            <span className="page-sub-title">
              Llena el formulario de contacto y cuentanos que necesitas.
            </span>
          </div>
          <FormComponent />
        </div>
      )}
    </div>
  );
};

export default Contact;
