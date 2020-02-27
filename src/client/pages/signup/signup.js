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
      redirect: false
    };
    localStorage.clear();
  }
  handleSubmit = e => {
    e.preventDefault();
    let user = {
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value,
      email: this.emailRef.current.value,
      confirmedPassword: this.confirmedPasswordRef.current.value
    };
    const isValidInput = service.validateAllFields(user);
    if (isValidInput) {
      const signupPromise = service.signup(user);
      signupPromise.then(response => {
        if (response.message) {
          //if user with such params already exists
          alert(response.message);
        }
        this.setState({ redirect: response.redirect });
      });
    } else {
      alert("Fill all fields, please");
    }
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/login" from="/signup" />;
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
