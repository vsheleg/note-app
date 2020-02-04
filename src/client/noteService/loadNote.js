const apiService = require("./apiService/index");

module.exports = function loadNote(url, note) {
  console.log(url + note + "/read");
  return apiService.get(url + note + "/read");
};
