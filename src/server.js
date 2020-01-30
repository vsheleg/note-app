const http = require("http");
const url = require("url");
const fs = require("fs");
const fileController = require("./controllers/fileController.js");
const folderController = require("./controllers/folderController.js");
const addFileController = require("./controllers/addFileController.js");
const deleteController = require("./controllers/deleteController.js");
const generateNameController = require("./controllers/generateNameController.js");
const hostname = "localhost";
const port = 3001;
const folder = "fl";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  let urlParts = url.parse(req.url, true);
  let urlPathName = urlParts.pathname;

  console.log(urlPathName);

  if (urlPathName.match(/notes\/addFile/)) {
    if (req.method === "POST") {
      let body = "";
      req.on("data", function(data) {
        body += data.toString();
      });
      req.on("end", () => {
        let path = generateNameController.generateName();
        console.log("path is " + path);
        addFileController.addFile(path, body);
        res.end(body);
      });
    }
  }

  if (urlPathName.match(/\/notes\/\d+.txt\/editFile\/.+/)) {
    let file = "fl/" + urlPathName.match(/\/notes\/(\d+.txt)\/editFile/)[1];
    addFileController.addFile(file, urlPathName.slice(22));
  }
  if (urlPathName.match(/\/notes\/\d+.txt\/delete/)) {
    let file = "fl/" + urlPathName.match(/\/notes\/(\d+.txt)\/delete/)[1];
    deleteController.delete(file);
    res.end("");
  }
  if (urlPathName.match(/\/notes\/\d+.txt\/read/)) {
    //delete file
    //return match
    let file = "fl/" + urlPathName.match(/\/notes\/(\d+.txt)\/read/)[1];
    let result = JSON.stringify(fileController.readData(file));
    res.end(result);
  }

  let obj = {
    "/": " ",
    "/notes": JSON.stringify(folderController.getFiles(folder))
  };

  res.end(obj[urlPathName]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
