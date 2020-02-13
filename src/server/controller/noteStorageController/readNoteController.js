const service = require("../../services/storageServices/index");

module.exports = function readNote(req, res) {
  let noteId = req.params["noteId"];
  let file = service.readNote(noteId);
  file.then(data => res.end(JSON.stringify([data.note_content])));
};
