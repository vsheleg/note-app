import request from "./apiService/index";
const BASEURI = "http://localhost:3002/";
const ROUTER_PREFIX = BASEURI + "user";
const ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup"
};

function login(user) {
  let result = request.post(ROUTER_PREFIX + ROUTES.LOGIN, user);
  return result
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

function signup(user) {
  let result = request.post(ROUTER_PREFIX + ROUTES.LOGIN, user);
  return result
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

export default { signup, login };
