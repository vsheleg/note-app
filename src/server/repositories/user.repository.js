const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes-app", "postgres", "1111", {
  dialect: "postgres"
});

const User = sequelize.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true
  },
  username: {
    type: Sequelize.CHAR,
    allowNull: true
  },
  password: {
    type: Sequelize.CHAR,
    allowNull: true
  },

  email: {
    type: Sequelize.CHAR,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.TIME,
    allowNull: true
  },
  updatedAt: {
    type: Sequelize.TIME,
    allowNull: true
  }
});
sequelize.sync().then(() => {});

function createUser(user) {
  return User.create({
    username: user.username,
    password: user.password,
    email: user.email
  }).then(error => {
    if (error) {
      return "false"; //if exists user with one of credentials returns mistake - values must be unique
    } else {
      return "true";
    }
  });
}

function addUser(user) {
  return User.findOne({
    where: {
      username: user.username,
      password: user.password,
      email: user.email
    }
  }).then(response => {
    if (response) {
      return "true"; //true means redirecting to notes
    } else {
      return createUser(user);
    }
  });
}
function loginUser(user) {
  return User.findOne({
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
}

module.exports = { addUser, loginUser };
