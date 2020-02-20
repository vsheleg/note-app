const repository = require("../repositories/user.repository");

function loginUser(user) {
  return repository.loginUser(user);
}
function signup(user) {
  return repository.signup(user);
}

module.exports = { signup, loginUser };
