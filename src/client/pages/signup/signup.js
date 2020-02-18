import React from "react";
import signup from "../../userService/signup";
import "../main.css";
import "./signup.css";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.password = React.createRef();
    this.username = React.createRef();
    this.email = React.createRef();
    this.confirmedPassword = React.createRef();
    this.state = { redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let username = this.username.current.value;
    let password = this.password.current.value;
    let email = this.email.current.value;
    let confirmedPassword = this.confirmedPassword.current.value;
    let result = signup({
      username: username,
      password: password,
      email: email,
      passsword: password,
      confirmedPassword: confirmedPassword
    });
    result
      .then(response => response.json())
      .then(response => this.setState({ redirect: response }));
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/notes" from="/signup" />;
    } else {
      return (
        <div id="form-registration">
          <form onSubmit={this.handleSubmit} method="post">
            <p id="form-header">Register</p>
            <hr />
            <input
              className="signup"
              type="text"
              placeholder="Name"
              name="username"
              ref={this.username}
            />

            <br />
            <input
              className="signup"
              type="email"
              placeholder="E-mail"
              name="email"
              ref={this.email}
            />
            <br />
            <input
              className="signup"
              type="password"
              placeholder="Password"
              name="password"
              ref={this.password}
            />
            <br />
            <input
              className="signup"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              ref={this.confirmedPassword}
            />
            <br />
            <input
              type="submit"
              class="primary"
              id="signup-btn"
              value="Sign up"
            />
          </form>
        </div>
      );
    }
  }
}

export default Signup;
