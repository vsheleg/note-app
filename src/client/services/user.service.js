import request from "./apiService/index";
const ROUTER_PREFIX = "user";

const ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup"
};

function login(user) {
  let result = request.post(ROUTER_PREFIX + ROUTES.LOGIN, user);
  return result;
}

function signup(user) {
  let result = request.post(ROUTER_PREFIX + ROUTES.SIGNUP, user);
  return result;
}

function validatePassword(password, confirmedPassword) {
  return password === confirmedPassword;
}

export default { signup, login, validatePassword };
