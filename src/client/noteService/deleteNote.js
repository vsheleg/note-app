const locUrl = "http://localhost:3001/notes/";
const apiService = require("./apiService/index");

module.exports = function deleteNote(note) {
  apiService.delete(locUrl, note);
};
