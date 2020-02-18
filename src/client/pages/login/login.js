import React from "react";
import login from "../../userService/login";
import { Redirect } from "react-router-dom";

import "../main.css";
import "./login.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.password = React.createRef();
    this.email = React.createRef();
    this.state = { redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let password = this.password.current.value;
    let email = this.email.current.value;
    let result = login({
      password: password,
      email: email
    });
    result
      .then(response => response.json())
      .then(response => this.setState({ redirect: response }));
  }
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
              ref={this.email}
            />
            <br />
            <input
              className="login"
              type="password"
              placeholder="Password"
              name="password"
              ref={this.password}
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
