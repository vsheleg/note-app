const fs = require("fs");
const url = require("url");
const noteStorage = require("./noteStorage/index");
const csv = require("csv-parser");

module.exports = function editNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  function reWriteData(newData) {
    let file = noteStorage.getNameOfFile(urlPath);
    let contentOfFile = ["Title,Content\r"];

    fs.createReadStream("./server/files/file.csv")
      .pipe(csv())
      .on("data", function(data) {
        if (data.Title === file) {
          data.Content = newData;
        }
        contentOfFile.push(data.Title + "," + data.Content + "\r");
      })
      .on("end", () => {
        contentOfFile[contentOfFile.length - 1] = contentOfFile[
          contentOfFile.length - 1 //delete blank line at the end
        ].slice(0, -1);
        fs.writeFileSync(
          "./server/files/file.csv",
          contentOfFile.join(""),
          function(err) {}
        );
      });
  }
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
