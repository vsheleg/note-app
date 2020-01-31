const fs = require("fs");
const folder = "../client/fl/";

function getNotes(path) {
  return fs.readdirSync(path);
}

module.exports = function editNote(req, res, path) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      fs.writeFile(path, body, function(err) {
        if (err) throw err;
      });
    });
    req.on("end", () => {
      res.end(body);
      return body;
    });
  }
};
