const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes-app", "postgres", "1111", {
  dialect: "postgres"
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

function deleteNote(noteId) {
  Notes.destroy({
    where: {
      id: noteId
    }
  });
}
function editNote(body, noteId) {
  Notes.update({ note_content: body }, { where: { id: noteId } });
}
function addNote(body) {
  return Notes.create({
    note_content: body
  });
}
function getNotes() {
  return Notes.findAll({ raw: true });
}
function readNote(noteId) {
  return Notes.findOne({ where: { id: noteId } });
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
