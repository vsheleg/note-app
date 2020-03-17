import React, { useState, useRef } from "react";
import service from "../../services/user.service";
import { Redirect } from "react-router-dom";
import "../main.css";
import "./login.css";
const KEY = "note-token";

export default function Signin({ onDefineHeader }) {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [redirect, setRedirect] = useState(false);
  onDefineHeader(window.location.pathname);
  document.title = "Login";

  function handleSubmit(e) {
    e.preventDefault();
    const loginPromise = service.login({
      password: passwordRef.current.value,
      email: emailRef.current.value
    });
    loginPromise.then(response => {
      localStorage.setItem(KEY, response.token);
      setRedirect(response.redirect);
    });
  }
  if (redirect) {
    return <Redirect to="/notes" from="/login" />;
  }
  return (
    <div id="form-login" onload={localStorage.clear()}>
      <form onSubmit={handleSubmit} method="post">
        <p id="form-header">Login</p>
        <hr />
        <input
          className="login"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={emailRef}
        />
        <br />
        <input
          className="login"
          type="password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
        />
        <br />
        <input
          type="submit"
          class="primary login"
          id="login-btn"
          value="Sign in"
        />
      </form>
    </div>
  );
}
