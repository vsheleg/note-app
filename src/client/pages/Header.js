import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul class="nav">
        <li>
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Sign in
          </Link>
        </li>
        <li>
          <Link className="link" to="/notes">
            Notes
          </Link>
        </li>
      </ul>
    );
  }
}
