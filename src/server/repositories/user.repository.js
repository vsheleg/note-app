let User = require("../db/index");

async function createUser(user) {
  let result = await User.create({
    username: user.username,
    password: user.password,
    email: user.email
  }).then(error => {
    if (error) {
      return false; //if exists user with one of credentials returns mistake - values must be unique
    } else {
      return true;
    }
  });
  return result;
}

async function addUser(user) {
  let result = await User.findOne({
    where: {
      username: user.username,
      password: user.password,
      email: user.email
    }
  }).then(response => {
    if (response) {
      return true; //true means there exists such user
    } else {
      return createUser(user);
    }
  });
  return result;
}
async function loginUser(user) {
  let result = await User.findOne({
    where: {
      email: user.email,
      password: user.password
    }
  }).then(response => {
    if (response) {
      return "true";
    } else {
      return "false";
    }
  });
  return result;
}

module.exports = { addUser, loginUser };
