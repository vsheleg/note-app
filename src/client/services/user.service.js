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

function validateAllFields(user) {
  if (
    !user.username ||
    !user.password ||
    !user.confirmedPassword ||
    !user.email
  ) {
    return false;
  }
  if (user.confirmedPassword !== user.password) {
    return false;
  }
  return true;
}

export default { signup, login, validateAllFields };
