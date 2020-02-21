let model = require("../db/index");

async function createUser(user) {
  //creates the user in db
  let result = await model.User.create({
    username: user.username,
    password: user.password,
    email: user.email
  })
    .then(error => {
      if (error) {
        return false; //if exists user with one of credentials returns mistake - values must be unique
      } else {
        return true;
      }
    })
    .catch(error => {});
  return result;
}

async function signup(user) {
  //tries to find user in db, if false calls createUser
  let result = await model.User.findOne({
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
  let result = await model.User.findOne({
    where: {
      email: user.email,
      password: user.password
    }
  }).then(response => {
    if (response) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}

module.exports = { signup, loginUser };
