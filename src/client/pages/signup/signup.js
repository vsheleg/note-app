import React from "react";
import service from "../../services/user.service";
import "../main.css";
import "./signup.css";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
    this.confirmedPasswordRef = React.createRef();
    this.state = { redirect: false };
  }
  handleSubmit = e => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const email = this.emailRef.current.value;
    const confirmedPassword = this.confirmedPasswordRef.current.value;
    const result = service.signup({
      username: username,
      password: password,
      email: email,
      passsword: password,
      confirmedPassword: confirmedPassword
    });
    result
      .then(response => response.json())
      .then(response => this.setState({ redirect: response }));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" from="/signup" />;
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
              ref={this.usernameRef}
            />

            <br />
            <input
              className="signup"
              type="email"
              placeholder="E-mail"
              name="email"
              ref={this.emailRef}
            />
            <br />
            <input
              className="signup"
              type="password"
              placeholder="Password"
              name="password"
              ref={this.passwordRef}
            />
            <br />
            <input
              className="signup"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              ref={this.confirmedPasswordRef}
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
