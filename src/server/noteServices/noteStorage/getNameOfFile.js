const fs = require("fs");

module.exports = function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+)/)[1];
  //return "./server/files/" + fileName;
  return fileName;
};
