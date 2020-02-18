import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import App from "../components/App";
import Signin from "./login/login";
import Signup from "./signup/signup";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul class="nav">
            <li>
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </li>
            <li>
              <Link className="link" to="/login">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="link" to="/notes">
                Notes
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Signin />
            </Route>
            <Route path="/notes">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
