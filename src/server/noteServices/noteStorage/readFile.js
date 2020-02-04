const fs = require("fs");
const url = require("url");
const getNameOfFile = require("./getNameOfFile");

module.exports = function readFile(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  let file = getNameOfFile(urlPath);
  let result = ["" + fs.readFileSync(file)];
  return result;
};
