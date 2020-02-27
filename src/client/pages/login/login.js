import React from "react";
import service from "../../services/user.service";
import { Redirect } from "react-router-dom";

import "../main.css";
import "./login.css";

const KEY = "note-token";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
    this.state = { redirect: false };
    localStorage.clear();
  }
  handleSubmit = e => {
    e.preventDefault();
    const loginPromise = service.login({
      password: this.passwordRef.current.value,
      email: this.emailRef.current.value
    });
    loginPromise.then(response => {
      localStorage.setItem(KEY, response.token);
      this.setState({ redirect: response.redirect });
    });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/notes" from="/login" />;
    }
    return (
      <div id="form-login">
        <form onSubmit={this.handleSubmit} method="post">
          <p id="form-header">Login</p>
          <hr />
          <input
            className="login"
            type="email"
            placeholder="E-mail"
            name="email"
            ref={this.emailRef}
          />
          <br />
          <input
            className="login"
            type="password"
            placeholder="Password"
            name="password"
            ref={this.passwordRef}
          />

          <br />
          <input type="submit" class="primary" id="login-btn" value="Sign in" />
        </form>
      </div>
    );
  }
}
