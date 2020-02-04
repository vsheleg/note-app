const fs = require("fs");

module.exports = function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+).txt/)[1];
  return "./server/files/" + fileName + ".txt";
};
