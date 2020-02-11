const fs = require("fs");
const url = require("url");

const getNameOfFile = require("./getNameOfFile");

module.exports = function readFile(req, res, path) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  console.log(urlPath);
  let nameFile = getNameOfFile(urlPath);

  let contentFile = fs.readFileSync(path + "file.csv", {
    encoding: "utf8"
  });

  contentFile = contentFile.split("\r\n");

  for (let i = 1; i < contentFile.length; i++) {
    if (nameFile === contentFile[i][0]) {
      contentFile = contentFile[i].slice(2);
      return [contentFile];
    }
  }
};
