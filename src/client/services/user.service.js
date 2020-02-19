const apiUrl = "user/";
const loginEndpoint = "login";
const signupEndpoint = "signup";
const locUrl = "http://localhost:3002/";

function login(user) {
  return fetch(locUrl + apiUrl + loginEndpoint, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}

function signup(user) {
  return fetch(locUrl + apiUrl + signupEndpoint, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}

module.exports = { signup, login };
