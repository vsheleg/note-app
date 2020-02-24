let model = require("../db/index");
/*
const jwt = require("jsonwebtoken");

function generateToken(user) {
  const data = {
    emai: user.email
  };
  const signature = "MySuP3R_z3kr3t";
  const expiration = "6h";

  return jwt.sign({ data }, signature, { expiresIn: expiration });
}*/

async function createUser(user) {
  return await model.User.create({
    username: user.username,
    password: user.password,
    email: user.email
  });
}

async function findUser(user) {
  return await model.User.findOne({
    where: {
      email: user.email,
      password: user.password
    }
  });
}

module.exports = { findUser, createUser };
