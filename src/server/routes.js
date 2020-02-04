let routes = new Map();
const noteStorage = require("./noteService/noteStorage/index");
const folder = "./server/files/";

function createRoute(template, handler) {
  routes.set(template, handler);
}

module.exports = function defineRoutes(req, res) {
  createRoute(/\/notes\/\d+.txt\/delete/, function(req, res) {
    return noteStorage.deleteFile(req, res);
  });
  createRoute(/\/notes\/\d+.txt\/edit/, function(req, res) {
    return noteStorage.editFile(req, res);
  });
  createRoute(/\/notes\/\d+.txt\/read/, function(req, res) {
    return noteStorage.readFile(req, res);
  });
  createRoute(/notes\/addFile/, function(req, res) {
    return noteStorage.addFile(req, res);
  });
  createRoute(/\/notes/, function(req, res) {
    return noteStorage.getFiles(folder);
  });
  createRoute(/\//, function() {
    return "";
  });
  return routes;
};
