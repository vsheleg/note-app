const express = require("express");
const noteStorage = require("./noteServices/noteStorage/index");
const noteService = require("./noteServices/index");
const folder = "./server/files/";

var cors = require("cors");
const notesRouter = express.Router();

const app = express();
app.use(cors());

notesRouter.get(/\/readAll/, function(req, res) {
  res.end(JSON.stringify(noteStorage.getFiles(folder)));
});
notesRouter.get(/\/\d+\/read/, function(req, res) {
  res.end(JSON.stringify(noteStorage.readFile(req, res, folder)));
});
notesRouter.post(/\/\d+\/edit/, function(req, res) {
  res.end(JSON.stringify(noteService.editNote(req, res)));
});
notesRouter.delete(/\/\d+\/delete/, function(req, res) {
  res.end(JSON.stringify(noteService.deleteNote(req, res)));
});
notesRouter.post(/\/add/, function(req, res) {
  res.end(JSON.stringify(noteService.addNote(req, res)));
});

app.use("/notes", notesRouter);

app.listen(3002);
