let model = require("../db/index");

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
