const noteService = require("./noteServices/index");
const noteStorage = require("./noteServices/noteStorage/index");

const folder = "./server/files/";
let routes = new Map();

function createRoute(template, handler) {
  routes.set(template, handler);
}

module.exports = function defineRoutes() {
  createRoute(/\/notes\/\d+\/delete/, function(req, res) {
    return noteService.deleteNote(req, res);
  });
  createRoute(/\/notes\/\d+\/edit/, function(req, res) {
    return noteService.editNote(req, res);
  });
  createRoute(/\/notes\/\d+\/read/, function(req, res) {
    return noteStorage.readFile(req, res);
  });
  createRoute(/notes\/addFile/, function(req, res) {
    return noteService.addNote(req, res);
  });
  createRoute(/\/notes/, function(req, res) {
    return noteStorage.getFiles(folder);
  });
  createRoute(/\//, function() {
    return "";
  });
  return routes;
};
