const fs = require("fs");
const generateName = require("./generateName.js");

exports.addFile = function(req, res) {
  let path = generateName.generateName();
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
