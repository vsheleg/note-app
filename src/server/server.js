const express = require("express");
const noteStorage = require("./noteServices/noteStorage/index");
const noteService = require("./noteServices/index");
const folder = "./server/files/";
const url = require("url");
var cors = require("cors");
const notesRouter = express.Router();
const app = express();
app.use(cors());
const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes", "postgres", "1111", {
  //"postgres://postgres:1111@localhost:5432/notes",
  dialect: "postgres"
});
const Notes = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: true
  },

  note_content: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
sequelize.sync().then(() => {
  app.listen(3002, function() {});
});

Notes.findAll({ raw: true }).then(data => {});

notesRouter.get("/readAll", function(req, res) {
  let result = [];
  Notes.findAll({ raw: true }).then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    console.log(result);
    res.end(JSON.stringify(result));
  });
});
notesRouter.get("/:noteId/read", function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let noteId = noteStorage.getNameOfFile(urlPath);
  Notes.findOne({ where: { id: noteId } }).then(data => {
    res.end(JSON.stringify([data.note_content]));
  });
});
notesRouter.post("/:noteId/edit", function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let noteId = noteStorage.getNameOfFile(urlPath);
  let body = "";
  req.on("data", function(data) {
    body += data.toString();
    Notes.update({ note_content: body }, { where: { id: noteId } });
    res.end("");
  });
});
notesRouter.delete("/:noteId/delete", function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let noteId = noteStorage.getNameOfFile(urlPath);
  Notes.destroy({
    where: {
      id: noteId
    }
  });
  res.end("");
});
notesRouter.post("/add", function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let result = [];
  Notes.findAll({ raw: true }).then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    result = result.sort();
    let newId = Math.max(...result) + 1;
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      Notes.create({
        id: newId,
        note_content: body
      }).then(() => {
        res.redirect("/notes/" + newId + "/read");
      });
    });
  });
});

app.use("/notes/", notesRouter);
