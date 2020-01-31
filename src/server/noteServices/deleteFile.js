const fs = require("fs");

function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+).txt/)[1];
  return "../client/fl/" + fileName + ".txt";
}

exports.deleteFile = function(path) {
  let file = getNameOfFile(path);
  return fs.unlinkSync(file);
};
