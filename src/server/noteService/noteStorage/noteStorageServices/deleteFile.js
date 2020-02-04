const fs = require("fs");
const url = require("url");
const getNameOfFile = require("./getNameOfFile");

module.exports = function deleteNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  console.log("pathdel " + urlPath);
  let file = getNameOfFile(urlPath);
  return fs.unlinkSync(file);
};
