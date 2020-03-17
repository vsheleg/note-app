import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import App from "../components/App";
import Signin from "./login/login";
import Signup from "./signup/signup";
import Header from "./Header";
import NotePage from "./NotePage";
import "./main.css";

export default function Main({}) {
  const [header, setHeader] = useState("");

  function defineHeader(header) {
    if (header === "/notes") {
      setHeader("Notes");
    } else if (header === "/my-notes") {
      setHeader("Notes");
    } else {
      setHeader("Home");
    }
    document.title = header;
  }

  return (
    <Router>
      {header === "Notes" ? <div id="notes-header">Notes</div> : <Header />}
      <Switch>
        <Route path="/signup">
          <Signup onDefineHeader={defineHeader} />
        </Route>
        <Route exact path="/login">
          <Signin onDefineHeader={defineHeader} />
        </Route>
        <Route path="/notes">
          <App typeOfNotes="all" onDefineHeader={defineHeader} />
        </Route>

        <Route path="/my-notes">
          <App typeOfNotes="personal" onDefineHeader={defineHeader} />
        </Route>
        <Route path="/:id">
          <NotePage onDefineHeader={defineHeader} />
        </Route>
        <Route path="/">
          <App typeOfNotes="all" onDefineHeader={defineHeader} />
        </Route>
      </Switch>
    </Router>
  );
}
