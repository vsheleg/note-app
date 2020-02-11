const fs = require("fs");
const csv = require("csv-parser");

module.exports = function addFile(req, res) {
  /*if (req.method === "POST") {
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
};*/

  function reWriteData(newData) {
    let contentOfFile = ["Title,Content\r"];

    fs.createReadStream("./server/files/file.csv")
      .pipe(csv())
      .on("data", function(data) {
        contentOfFile.push(data.Title + "," + data.Content + "\r");
      })
      .on("end", () => {
        contentOfFile.push(newData + "\r");
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
