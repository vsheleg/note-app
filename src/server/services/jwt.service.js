const jwt = require("jsonwebtoken");
const config = require("config");

function generateToken(user) {
  const data = {
    email: user.email,
    password: user.password
  };
  const signature = config.get("Token.tokenConfig.signature");
  const expiration = config.get("Token.tokenConfig.expiration");
  return jwt.sign({ data }, signature, { expiresIn: expiration });
}

module.exports = generateToken;
