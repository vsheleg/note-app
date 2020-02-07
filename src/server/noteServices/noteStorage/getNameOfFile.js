const fs = require("fs");

module.exports = function getNameOfFile(path) {
  console.log("path" + path);
  let fileName = path.match(/\/(\d+)/)[1];
  //return "./server/files/" + fileName;
  return fileName;
};
