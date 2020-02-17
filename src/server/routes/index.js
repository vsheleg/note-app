const express = require("express");
const controller = require("../controller/index");
const notesRouter = express.Router();

notesRouter.delete("/:noteId/delete", function(req, res) {
  controller.deleteNote(req, res);
});
notesRouter.get("/:noteId/read", function(req, res) {
  controller.readNote(req, res);
});
notesRouter.get("/readAll", function(req, res) {
  controller.getNotes(req, res);
});
notesRouter.post("/:noteId/edit", function(req, res) {
  controller.editNote(req, res);
});
notesRouter.post("/add", function(req, res) {
  controller.addNote(req, res);
});

module.exports = notesRouter;
