const apiService = require("./apiService/index");

module.exports = function loadAllNotes(url) {
  return apiService.get(url);
};
