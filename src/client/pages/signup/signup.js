import React, { useState, useRef } from "react";
import service from "../../services/user.service";
import "../main.css";
import "./signup.css";
import { Redirect } from "react-router-dom";

export default function Signup({ onDefineHeader }) {
  const [redirect, setRedirect] = useState(false);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const confirmedPasswordRef = useRef(null);
  onDefineHeader(window.location.pathname);
  document.title = "Signup";

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      confirmedPassword: confirmedPasswordRef.current.value
    };
    const isValidInput = service.validateAllFields(user);

    if (isValidInput) {
      const signupPromise = service.signup(user);
      signupPromise.then(response => {
        if (response.message) {
          //if user with such params already exists
          alert(response.message);
        }
        setRedirect(response.redirect);
      });
    } else {
      alert("Fill all fields, please");
    }
  }
  if (redirect) {
    return <Redirect to="/login" from="/signup" />;
  }
  return (
    <div id="form-registration" onLoad={localStorage.clear()}>
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
        <br />
        <input type="submit" class="primary" id="signup-btn" value="Sign up" />
      </form>
    </div>
  );
}
