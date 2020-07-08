import React from "react";

import "./style.css";
import "../../shared/colors.css";

const Button = (props) => {
  // const onClick = props.onClick || (() => null);

  let {
    outline,
    gradient,
    popOnHover,
    lightOnHover,
    shaped,
    className,
    children,
    disabled = false,
    ...newProps
  } = props;

  return (
    <button
      disabled={disabled}
      className={`${className || " "} button ${
        outline ? "outline" : "filled"
      } ${gradient ? "button-gradient gradient-bg" : " "} ${
        popOnHover ? "button-pop" : " "
      } ${lightOnHover ? "button-light" : " "} ${
        shaped ? "button-shaped" : " "
      }  ${disabled ? "button-disabled" : ""}`}
      {...newProps}
    >
      {children}
    </button>
  );
};

export default Button;
