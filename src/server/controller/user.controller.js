const service = require("../services/user.service");
const bodyParser = require("body-parser");

function addUser(req, res) {
  service.addUser(req.body).then(response => {
    res.end(String(response));
  });
}
function loginUser(req, res) {
  service.loginUser(req.body).then(response => {
    res.end(String(response));
  });
}

module.exports = { addUser, loginUser };
