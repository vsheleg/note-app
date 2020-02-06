const fs = require("fs");
const url = require("url");
const csv = require("csv-parser");
const { convertCSVToArray } = require("convert-csv-to-array");
const converter = require("convert-csv-to-array");
const getNameOfFile = require("./getNameOfFile");

module.exports = function readFile(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let nameFile = getNameOfFile(urlPath);
  let contentOfFile = [];

  let contentFile = fs.readFileSync("./server/files/file.csv", {
    encoding: "utf8"
  });
  contentFile = contentFile.split("\r\n");

  for (let i = 1; i < contentFile.length; i++) {
    if (nameFile === contentFile[i][0]) {
      contentFile = contentFile[i].slice(2);
      return [contentFile];
    }
  }
  return [""];
};
