const repository = require("../../repositories/index");

module.exports = function readFile(noteId) {
  return repository.readNote(noteId);
};
