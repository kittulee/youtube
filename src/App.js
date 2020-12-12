import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import Menu from "./components/pages/Menu";
import SignUpForm from "./components/pages/SignUpForm";
import CookBook from "./components/pages/CookBook";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/services" component={CookBook} />
          <Route path="/signin" exact component={SignUpForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
