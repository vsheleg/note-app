const fs = require("fs");
const url = require("url");
const getNameOfFile = require("./getNameOfFile");
module.exports = function editNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let path = getNameOfFile(urlPath);

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
