const jwt = require("jsonwebtoken");
const config = require("config");

function generateToken(user) {
  const signature = config.get("Token.tokenConfig.signature");
  const expiration = config.get("Token.tokenConfig.expiration");
  return jwt.sign({ email: user.email, password: user.password }, signature, {
    expiresIn: expiration
  });
}

module.exports = generateToken;
