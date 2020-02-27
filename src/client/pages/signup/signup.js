import React, { useState, useEffect } from "react";
import service from "../../services/user.service";
import "../main.css";
import "./signup.css";
import { Redirect } from "react-router-dom";

export default function Signup(props) {
  const [redirect, setRedirect] = useState(false);
  const [validatePassword, setValidatePassword] = useState(true);
  const passwordRef = React.createRef();
  const usernameRef = React.createRef();
  const emailRef = React.createRef();
  const confirmedPasswordRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    const isValidPassword = service.validatePassword(
      passwordRef.current.value,
      confirmedPasswordRef.current.value
    );
    const isValidInput = service.validateAllFields(
      usernameRef.current.value,
      passwordRef.current.value,
      confirmedPasswordRef.current.value,
      emailRef.current.value
    );
    setValidatePassword(isValidPassword);
    if (isValidInput) {
      if (isValidPassword) {
        const signupPromise = service.signup({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
          confirmedPassword: confirmedPasswordRef.current.value
        });
        signupPromise.then(response => {
          if (response.message) {
            //if user with such params already exists
            alert(response.message);
          }
          localStorage.setItem("note-token", response.token);
          setRedirect(response.redirect);
        });
      }
    } else {
      alert("Fill all fields, please");
    }
  }
  if (redirect) {
    return <Redirect to="/notes" from="/signup" />;
  }
  return (
    <div id="form-registration" onload={localStorage.clear()}>
      <form onSubmit={handleSubmit} method="post">
        <p id="form-header">Register</p>
        <hr />
        <input
          className="signup"
          type="text"
          placeholder="Name"
          name="username"
          ref={usernameRef}
        />
        <br />
        <input
          className="signup"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={emailRef}
        />
        <br />
        <input
          className="signup"
          type="password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
        />
        <br />
        <input
          className="signup"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          ref={confirmedPasswordRef}
        />
        {!validatePassword ? <span>Passwords don't match</span> : null}
        <br />
        <input type="submit" class="primary" id="signup-btn" value="Sign up" />
      </form>
    </div>
  );
}
