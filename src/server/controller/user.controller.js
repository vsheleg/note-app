const service = require("../services/user.service");

function addUser(req, res) {
  req.on("data", function(data) {
    let user = JSON.parse(data);
    service.addUser(user).then(response => {
      res.end(String(response));
    });
  });
}
function loginUser(req, res) {
  req.on("data", function(data) {
    let user = JSON.parse(data);
    service.loginUser(user).then(response => {
      res.end(String(response));
    });
  });
}

module.exports = { addUser, loginUser };
