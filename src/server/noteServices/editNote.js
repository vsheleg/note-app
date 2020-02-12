const fs = require("fs");
const url = require("url");
const noteStorage = require("./noteStorage/index");
const csv = require("csv-parser");

module.exports = function editNote(req, res) {
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
