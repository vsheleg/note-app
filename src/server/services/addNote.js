const repository = require("../repositories/index");

module.exports = function addFile(body) {
  return repository.addNote(body);
};
