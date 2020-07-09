import React from "react";

import Button from "../button";

import "./style.css";

const Modal = ({
  message,
  title,
  onAccept,
  accepLabel,
  onCancel,
  cancelLabel,
}) => {
  return (
    <React.Fragment>
      <div className="modal--black" />
      <div className="modal">
        {title && <span className="modal__title">{title}</span>}
        {message && <span className="modal__message">{message}</span>}
        <div className="modal__buttons">
          {cancelLabel && (
            <Button className="modal__button" outline onClick={onCancel}>
              {cancelLabel}
            </Button>
          )}
          {accepLabel && (
            <Button className="modal__button" gradient onClick={onAccept}>
              {accepLabel}
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
