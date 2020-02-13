const service = require("../../services/index");

module.exports = function addNoteController(req, res) {
  let body = "";
  req.on("data", function(data) {
    body += data.toString();
    let result = service.addNote(body);

    res.redirect("/notes/readAll");
  });
};
