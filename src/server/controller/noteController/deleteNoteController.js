const service = require("../../services/index");

module.exports = function deleteNoteController(req, res) {
  let noteId = req.params["noteId"];
  service.deleteNote(noteId);
  res.end("");
};
