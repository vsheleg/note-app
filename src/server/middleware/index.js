const jwt = require("jsonwebtoken"),
  repository = require("../repositories/user.repository");

async function findToken(req, res, next) {
  //checks if there exists token
  if (req.headers.authorization != "null") {
    req.userToken = req.headers.authorization;
    next();
  } else {
    res.sendStatus(403); //if there is no token
  }
}
async function validateToken(req, res, next) {
  //decodes token
  const decoded = jwt.decode(req.userToken);
  const user = await repository.findUser(decoded.data);
  if (!user) {
    res.sendStatus(403); //if such user doesn't exists
  }
  next();
}
module.exports = { findToken, validateToken };
