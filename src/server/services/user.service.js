const repository = require("../repositories/user.repository");

const jwt = require("jsonwebtoken");

function generateToken(user) {
  const data = {
    email: user.email
  };
  const signature = "MySuP3R_z3kr3t";
  const expiration = "6h";

  return jwt.sign({ data }, signature, { expiresIn: expiration });
}

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
    return { redirect: createdUser, token: generateToken(user) };
  }
}

module.exports = { signup, loginUser };
