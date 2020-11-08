import React from "react";
import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "./components/pages/Home";
import Therapy from "./components/pages/Therapy";
import Contact from "./components/pages/Contact";

const App = () => {
  document.body.ontouchmove = (e) => {
    e.preventDefault();
    return false;
  };
  return (
    <Router className="App">
      <div className="body-bg"></div>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/therapy">
          <Therapy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
