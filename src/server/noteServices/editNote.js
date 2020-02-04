const fs = require("fs");
const url = require("url");
const noteStorage = require("./noteStorage/index");

module.exports = function editNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let path = noteStorage.getNameOfFile(urlPath);

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
