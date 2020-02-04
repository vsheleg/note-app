const locUrl = "http://localhost:3001/notes/";
const apiService = require("./apiService/index");

module.exports = function editNote(elem, file) {
  apiService.post(locUrl + file + "/edit", elem);
};
