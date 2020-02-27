const repository = require("../repositories/user.repository");
const generateToken = require("./jwt.service");

async function loginUser(user) {
  const existingUser = await repository.findUser(user);
  return { redirect: existingUser, token: generateToken(user) };
}
async function signup(user) {
  //tries to find user in db, if false calls createUser
  const existingUser = await repository.findUser(user);
  if (existingUser) {
    return {
      message: "user with such params already exists",
      redirect: false
    };
  } else {
    const createdUser = repository.createUser(user);
    return { redirect: createdUser };
  }
}

module.exports = { signup, loginUser };
