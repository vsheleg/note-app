const express = require("express");
const controller = require("../controller/note.controller");
const middleware = require("../middleware");
const notesRouter = express.Router();

notesRouter.use(middleware.resolveUser);

notesRouter.delete("/:noteId", controller.deleteNote);
notesRouter.get("/:noteId", controller.readNote);
notesRouter.get("/", controller.getNotes);
notesRouter.put("/:noteId", controller.editNote);
notesRouter.post("/", controller.addNote);

module.exports = notesRouter;
