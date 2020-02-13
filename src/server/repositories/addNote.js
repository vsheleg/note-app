const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes", "postgres", "1111", {
  dialect: "postgres"
});

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
sequelize.sync().then(() => {});

module.exports = function addNote(body) {
  let result = [];
  Notes.findAll({ raw: true }).then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    result = result.sort();
    let newId = Math.max(...result) + 1;

    return Notes.create({
      id: newId,
      note_content: body
    });
  });
};
