const repository = require("../repositories/index");

module.exports = function deleteNote(noteId) {
  return repository.deleteNote(noteId);
};
