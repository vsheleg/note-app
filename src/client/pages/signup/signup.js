import React from "react";
import service from "../../services/user.service";
import "../main.css";
import "./signup.css";
import { Redirect } from "react-router-dom";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
    this.confirmedPasswordRef = React.createRef();
    this.state = {
      redirect: false,
      validatePassword: true
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const isValidate = service.validatePassword(
      this.passwordRef.current.value,
      this.confirmedPasswordRef.current.value
    );
    this.setState({ validatePassword: isValidate });
    if (isValidate) {
      const signupPromise = service.signup({
        username: this.usernameRef.current.value,
        password: this.passwordRef.current.value,
        email: this.emailRef.current.value,
        confirmedPassword: this.confirmedPasswordRef.current.value
      });
      signupPromise.then(response => {
        if (response.message) {
          //if user with such params already exists
          alert(response.message);
        }
        this.setState({ redirect: response.redirect });
      });
    }
  };
  render() {
    const { redirect, validatePassword } = this.state;
    if (redirect) {
      return <Redirect to="/notes" from="/signup" />;
    }
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
          {!validatePassword ? <span>Passwords don't match</span> : null}
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
