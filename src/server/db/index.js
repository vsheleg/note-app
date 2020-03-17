/*const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes-app", "postgres", "1111", {
  dialect: "postgres"
});*/
const URL =
  "postgres://bywfucivzutsgy:39017695285ef71f25ef1eca4cc8a7cb574f65169ffc206af6f7e0e4eb9f954a@ec2-34-204-22-76.compute-1.amazonaws.com:5432/dchk3kjvu4c5hc";

const Sequelize = require("sequelize");
const match = URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
sequelize = new Sequelize(match[5], match[1], match[2], {
  dialect: "postgres",
  dialect: "postgres",
  dialectOptions: {
    ssl: true
  },
  protocol: "postgres",
  port: match[4],
  host: match[3],
  ssl: true
});
sequelize.sync();

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
  }
});

const Notes = sequelize.define("notes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true
  },
  note_content: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  privacy: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  author: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = { User, Notes };
