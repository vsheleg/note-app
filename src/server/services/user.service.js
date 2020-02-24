const repository = require("../repositories/user.repository");

async function loginUser(user) {
  return await repository.findUser(user).then(response => {
    if (!response) {
      return { redirect: false };
    } else {
      return { redirect: true };
    }
  });
}
async function signup(user) {
  //tries to find user in db, if false calls createUser
  return await repository.findUser(user).then(response => {
    if (response) {
      return {
        message: "user with such params already exists",
        redirect: false
      };
    }
    return repository.createUser(user).then(error => {
      return { redirect: error };
    });
  });
}

module.exports = { signup, loginUser };
