const fs = require("fs");
const url = require("url");
const noteStorage = require("./noteStorage/index");

module.exports = function deleteNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  let file = noteStorage.getNameOfFile(urlPath);
  return fs.unlinkSync(file);
};
