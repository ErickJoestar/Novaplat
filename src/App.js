import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import DefaultView from "./views/default-view";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <DefaultView>
              <About />
            </DefaultView>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
