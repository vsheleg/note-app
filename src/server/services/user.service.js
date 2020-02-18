const repository = require("../repositories/user.repository");

function loginUser(user) {
  return repository.loginUser(user);
}
function addUser(user) {
  return repository.addUser(user);
}

module.exports = { addUser, loginUser };
