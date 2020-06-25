import React from 'react';
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import Therapy from './components/pages/Therapy';
import Contact from './components/pages/Contact';


const App = () => {
  document.body.ontouchmove = (e) => { e.preventDefault(); return false; };
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/therapy">
          <Therapy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
