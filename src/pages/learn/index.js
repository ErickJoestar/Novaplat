import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Banner from "../../components/banner";
import AreasGrid from "../../components/areas-grid";
import Lab from "../lab";

import { BANNER_HEIGHT } from "../../shared/constants";
import { LABS_DATA } from "../../shared/data";

import learnBanner from "../../assets/images/learn-banner.jpg";

import "./style.css";
import "../../shared/fonts.css";

const Learn = () => {
  const { path } = useRouteMatch();
  return (
    <div className="learn">
      <Switch>
        <Route exact path={path}>
          <Banner
            image={learnBanner}
            style={{ height: BANNER_HEIGHT }}
            textStyle={{ maxWidth: "100rem" }}
            title="Hoy es un buen día para crear algo nuevo"
            subtitle="Te ayudamos a hacer realidad tus proyectos."
          />
          <section className="learn__section">
            <h3
              className="purple"
              style={{ fontWeight: 700, fontSize: "3.5rem" }}
            >
              ¿Qué te interesa aprender?
            </h3>
            <AreasGrid />
          </section>
        </Route>
        {LABS_DATA.map((data, i) => {
          return (
            <Route key={i} exact path={`${path}/${data.name}`}>
              <Lab {...data} />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

export default Learn;
