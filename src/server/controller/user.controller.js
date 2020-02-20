const service = require("../services/user.service");

function signup(req, res) {
  service.signup(req.body).then(response => {
    res.end({ response });
  });
}
function loginUser(req, res) {
  service.loginUser(req.body).then(response => {
    res.end({ response });
  });
}

module.exports = { signup, loginUser };
