const service = require("../services/user.service");

function signup(req, res) {
  service.signup(req.body).then(response => {
    res.send(response);
  });
}
function loginUser(req, res) {
  service.loginUser(req.body).then(response => {
    res.send(response);
  });
}

module.exports = { signup, loginUser };
