const repository = require("../../repositories/index");

module.exports = function getFiles(noteId) {
  return repository.loadAllNotes();
};
