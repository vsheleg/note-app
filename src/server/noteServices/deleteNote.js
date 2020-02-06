const fs = require("fs");
const url = require("url");
const csv = require("csv-parser");
const noteStorage = require("./noteStorage/index");

module.exports = function deleteNote(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  let file = noteStorage.getNameOfFile(urlPath);
  let contentOfFile = ["Title,Content\r"];
  fs.createReadStream("./server/files/file.csv")
    .pipe(csv())
    .on("data", function(data) {
      if (data.Title !== file) {
        contentOfFile.push(data.Title + "," + data.Content + "\r");
      }
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
};
