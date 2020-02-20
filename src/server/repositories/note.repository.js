let model = require("../db/index");

function deleteNote(noteId) {
  model.Notes.destroy({
    where: {
      id: noteId
    }
  });
}
function editNote(body, noteId) {
  model.Notes.update({ note_content: body.value }, { where: { id: noteId } });
}
function addNote(body) {
  return model.Notes.create({
    note_content: body
  });
}
function getNotes() {
  return model.Notes.findAll({ raw: true });
}
function readNote(noteId) {
  return model.Notes.findOne({ where: { id: noteId } });
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
