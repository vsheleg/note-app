const fs = require("fs");
const csv = require("csv-parser");

module.exports = function addFile(req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      reWriteData(body);
    });
    req.on("end", () => {
      res.end(body);
      return body;
    });
  }
};
