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

module.exports = function readNote(noteId) {
  return Notes.findOne({ where: { id: noteId } });
};
