import React from "react";
import service from "../../services/user.service";
import { Redirect } from "react-router-dom";

import "../main.css";
import "./login.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
    this.state = { redirect: false };
  }
  handleSubmit = e => {
    e.preventDefault();
    const password = this.passwordRef.current.value;
    const email = this.emailRef.current.value;
    const result = service.login({
      password: password,
      email: email
    });
    result
      .then(response => response.json())
      .then(response => this.setState({ redirect: response }));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/notes" from="/login" />;
    } else {
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
            <input
              type="submit"
              class="primary"
              id="login-btn"
              value="Sign in"
            />
          </form>
        </div>
      );
    }
  }
}
export default Signin;
