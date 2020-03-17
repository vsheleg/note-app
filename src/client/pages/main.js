import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import App from "../components/App";
import Signin from "./login/login";
import Signup from "./signup/signup";
import Header from "./Header";
import "./main.css";

export default function Main({}) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Signin />
        </Route>
        <Route path="/notes">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
