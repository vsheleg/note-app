const fs = require("fs");
const generateNewName = require("./generateNewName");

module.exports = function addFile(req, res) {
  let file = generateNewName();

  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      console.log("filename " + file + " body " + body);
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
