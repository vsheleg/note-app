const express = require("express");
const noteController = require("../controller/noteController/index");
const noteStorageController = require("../controller/noteStorageController/index");
const notesRouter = express.Router();

notesRouter.delete("/:noteId/delete", function(req, res) {
  noteController.deleteNote(req, res);
});
notesRouter.get("/:noteId/read", function(req, res) {
  noteStorageController.readNote(req, res);
});
notesRouter.get("/readAll", function(req, res) {
  noteStorageController.getNotes(req, res);
});
notesRouter.post("/:noteId/edit", function(req, res) {
  noteController.editNote(req, res);
});
notesRouter.post("/add", function(req, res) {
  noteController.addNote(req, res);
});

module.exports = notesRouter;
