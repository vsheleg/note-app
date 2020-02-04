const locUrl = "http://localhost:3001/notes";
const apiService = require("./apiService/index");

module.exports = function addNote(note) {
  apiService.post(locUrl + "/addFile", note);
};
