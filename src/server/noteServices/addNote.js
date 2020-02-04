const fs = require("fs");
const noteStorage = require("./noteStorage");

module.exports = function addFile(req, res) {
  let file = noteStorage.generateNewName();
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      fs.writeFile(file, body, function(err) {
        if (err) throw err;
      });
    });
    req.on("end", () => {
      res.end(body);
      return body;
    });
  }
};
