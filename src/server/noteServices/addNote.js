const fs = require("fs");

module.exports = function addFile(req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      fs.appendFile("./server/files/file.csv", "\r" + body, function(err) {
        if (err) throw err;
      });
    });
    req.on("end", () => {
      res.end(body);
      return body;
    });
  }
};
