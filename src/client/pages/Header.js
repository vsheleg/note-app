import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./main.css";

export default function Header(props) {
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
    </ul>
  );
}
