const fs = require("fs");
const csv = require("csv-parser");

module.exports = function getFiles(path) {
  var result = [];
  console.log(path);
  let contentFile = fs.readFileSync(path + "file.csv", {
    encoding: "utf8"
  });
  contentFile = contentFile.split("\r");
  for (let i = 1; i < contentFile.length; i++) {
    result.push(i);
  }
  return result;
};
