const service = require("../../services/index");

module.exports = function editNoteController(req, res) {
  let noteId = req.params["noteId"];
  let body = "";
  req.on("data", function(data) {
    body += data.toString();
    service.editNote(body, noteId);
    res.end("");
  });
};
