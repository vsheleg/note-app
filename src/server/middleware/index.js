const jwt = require("jsonwebtoken"),
  repository = require("../repositories/user.repository");

async function resolveUser(req, res, next) {
  const { authorization: token } = req.headers;
  const userId = token ? jwt.decode(token) : null;
  req.user = userId ? await repository.findUser(userId) : null;
  next();
}
async function validateUser(req, res, next) {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    next();
  }
}
module.exports = { resolveUser, validateUser };
