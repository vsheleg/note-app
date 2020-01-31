const fs = require("fs");

function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+).txt/)[1];
  return "../client/fl/" + fileName + ".txt";
}

module.exports = function deleteNote(path) {
  let file = getNameOfFile(path);
  return fs.unlinkSync(file);
};
