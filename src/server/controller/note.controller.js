const service = require("../services/note.service");

function addNote(req, res) {
  let body = "";
  req.on("data", function(data) {
    body += data.toString();
    let result = service.addNote(body);
    res.redirect("/notes/readAll");
  });
}

function deleteNote(req, res) {
  let noteId = req.params["noteId"];
  service.deleteNote(noteId);
  res.end("");
}

function editNote(req, res) {
  let noteId = req.params["noteId"];
  req.on("data", function(data) {
    let body = JSON.parse(data);
    service.editNote(body, noteId);
    res.end("true");
  });
}

function getNotes(req, res) {
  let file = service.getNotes();
  let result = [];
  file.then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    res.end(JSON.stringify(result));
  });
}
function readNote(req, res) {
  let noteId = req.params["noteId"];
  let file = service.readNote(noteId);
  file.then(data => res.end(JSON.stringify([data.note_content])));
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
