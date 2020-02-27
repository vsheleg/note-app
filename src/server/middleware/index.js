const jwt = require("jsonwebtoken"),
  repository = require("../repositories/user.repository");

async function resolveUser(req, res, next) {
  //checks if there exists token
  if (req.headers.authorization) {
    req.userToken = req.headers.authorization;
    const decoded = jwt.decode(req.userToken);
    req.decodedUser = decoded || { email: "", password: "" };
    next();
  }
}
async function validateUser(req, res, next) {
  //decodes token
  const user = await repository.findUser(req.decodedUser);
  if (!user) {
    res.sendStatus(403); //if such user doesn't exists
  }
  next();
}
module.exports = { resolveUser, validateUser };
