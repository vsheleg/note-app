const fs = require("fs");
const csv = require("csv-parser");

module.exports = function getFiles(path) {
  var result = [];

  let contentFile = fs.readFileSync("./server/files/file.csv", {
    encoding: "utf8"
  });
  contentFile = contentFile.split("\r\n");
  for (let i = 1; i < contentFile.length; i++) {
    result.push(i);
  }
  return result;
};
