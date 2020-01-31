const readNote = require("./controllers/fileController.js");
const url = require("url");

exports.readHandler = function(req, res, file) {
  let regexp = /\/notes\/\d+.txt\/read/;
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  return urlPath.match(regexp);
};
