import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import banner from "../../assets/images/contact-banner.jpg";

import "./style.css";
import "../../shared/fonts.css";
import "../../shared/colors.css";
import Button from "../../components/button";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Contact = () => {
  const handleSumit = (values, { setSubmiting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmiting(false);
    }, 400);
  };
  return (
    <div className="contact">
      <div className="contact__banner">
        <img src={banner} className="contact__img" alt="" />
        <div className="contact__text-container">
          <h2 className="page-main-title">¿PODEMOS AYUDARTE?</h2>
          <span className="page-sub-title">
            Llena el formulario de contacto y cuentanos que necesitas.
          </span>
        </div>
        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Necesitas escribir un nombre."),
            email: Yup.string()
              .email("Escribe un correo válido")
              .required("Necesitas escribir un correo."),
            phone: Yup.string().matches(
              phoneRegExp,
              "Numero telefónico inválido."
            ),
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
      </div>
    </div>
  );
};

export default Contact;
