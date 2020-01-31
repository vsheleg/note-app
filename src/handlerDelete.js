const deleteNote = require("./controllers/deleteController.js");
const url = require("url");

exports.deleteHandler = function(req, resp, file) {
  let regexp = /\/notes\/(\d+).txt\/delete/;
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  return urlPath.match(regexp);
};
