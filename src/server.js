const http = require("http");
const url = require("url");
const fs = require("fs");
const fileController = require("./controllers/fileController.js");
const folderController = require("./controllers/folderController.js");
const addFileController = require("./controllers/addFileController.js");
const hostname = "localhost";
const port = 3001;
const folder = "fl";
const file1 = "fl/file1.txt";
const file2 = "fl/file2.txt";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let urlParts = url.parse(req.url, true);
  let urlPathName = urlParts.pathname;
  if (urlPathName.match(/\/notes\/addFile\/.+/)) {
    console.log(urlPathName.slice(15));
    addFileController.addFile("fl/file3.txt", urlPathName.slice(15));
  }

  if (urlPathName.match(/\/notes\/file1\/editFile\/.+/)) {
    console.log("this " + urlPathName.slice(22));
    addFileController.addFile(file1, urlPathName.slice(22));
  }

  let obj = {
    "/data": "Hello World",
    "/": " ",
    "/notes": JSON.stringify(folderController.getFiles(folder)),
    "/notes/file1": JSON.stringify(fileController.readData(file1)),
    "/notes/file2": JSON.stringify(fileController.readData(file2))
  };

  res.end(obj[urlPathName]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
