const fs = require("fs");

function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+).txt/)[1];
  return "../client/fl/" + fileName + ".txt";
}

exports.readFile = function(path) {
  let file = getNameOfFile(path);
  console.log(file);
  let result = ["" + fs.readFileSync(file)];
  return result;
};
