const repository = require("../repositories/note.repository");

function editNote(body, noteId) {
  return repository.editNote(body, noteId);
}

function deleteNote(noteId) {
  return repository.deleteNote(noteId);
}

function addNote(body) {
  return repository.addNote(body);
}
function readNote(noteId) {
  return repository.readNote(noteId);
}
function getNotes() {
  return repository.getNotes();
}

module.exports = { editNote, deleteNote, addNote, readNote, getNotes };
