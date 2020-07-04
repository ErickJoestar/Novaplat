import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Search from "./pages/search";
import Team from "./pages/team";
import AuthPage from "./pages/auth-page";
import Learn from "./pages/learn";

import DefaultView from "./views/default-view";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DefaultView selection="home">
              <Home />
            </DefaultView>
          </Route>

          <Route exact path="/nosotros">
            <DefaultView selection="team">
              <Team />
            </DefaultView>
          </Route>
          <Route exact path="/contacto">
            <DefaultView selection="contact">
              <Contact />
            </DefaultView>
          </Route>
          <Route exact path="/buscar">
            <DefaultView selection="search">
              <Search />
            </DefaultView>
          </Route>
          <Route exact path="/aprender">
            <DefaultView selection="learn">
              <Learn />
            </DefaultView>
          </Route>
          <Route exact path="/login">
            <AuthPage type="login" />
          </Route>
          <Route exact path="/signup">
            <AuthPage type="signup" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
