const fs = require("fs");
const pgp = require("pg-promise")(/*options*/);
//const databaseId = pgp("postgres://postgres:1111@localhost:5432/notes");

module.exports = function getFiles(path) {
  let result = [];
  let contentFile = fs.readFileSync(path + "file.csv", {
    encoding: "utf8"
  });
  contentFile = contentFile.split("\r");
  for (let i = 1; i < contentFile.length; i++) {
    result.push(i);
  }

  console.log(result);
  return [1, 2, 3];
};
/*
  let result = [];

  const Sequelize = require("sequelize");
  const sequelize = new Sequelize("notes", "postgres", "1111", {
    //"postgres://postgres:1111@localhost:5432/notes",
    dialect: "postgres"
  });

  sequelize.authenticate().then(() => {
    console.log("success");

    const Notes = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true
      },
      note_content: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });

    Notes.findAll({ raw: true }).then(data => {
      for (let i = 0; i < data.length; i++) {
        result.push(data[i].id);
      }
    });
  });
  return [1, 2, 3];
};*/
