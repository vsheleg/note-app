const fs = require("fs");

module.exports = function getNameOfFile(path) {
  let fileName = path.match(/\/(\d+)/)[1];
  return fileName;
};
