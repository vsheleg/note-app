const repository = require("../repositories/index");

module.exports = function editNote(body, noteId) {
  return repository.editNote(body, noteId);
};
