import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.css";

const DefaultView = (props) => {
  return (
    <>
      <Header selection={props.selection} />
      {props.children}
      <Footer />
    </>
  );
};

export default DefaultView;
