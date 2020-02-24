const express = require("express");
const controller = require("../controller/note.controller");
const notesRouter = express.Router();
const jwt_decode = require("jwt-decode");
const model = require("../db/index"); //will be moved to repository

notesRouter.use(function(req, res) {
  const decoded = jwt_decode(req.headers.authorization);
  const user = model.Notes.findOne({ where: { email: decoded.data.email } }); //will be moved to repository
  if (!user) {
    res.forbidden();
  }
});

notesRouter.delete("/delete/:noteId", controller.deleteNote);
notesRouter.get("/read/:noteId", controller.readNote);
notesRouter.get("/readAll", controller.getNotes);
notesRouter.post("/edit/:noteId", controller.editNote);
notesRouter.post("/add", controller.addNote);

module.exports = notesRouter;
