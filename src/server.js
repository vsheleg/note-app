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
  res.setHeader("Access-Control-Request-Method", "POST");
  let urlParts = url.parse(req.url, true);
  let urlPathName = urlParts.pathname;
  /*if (urlPathName.match(/\/notes\/addFile\/.+/)) {
    console.log(urlPathName.slice(15));
    addFileController.addFile("fl/file3.txt", urlPathName.slice(15));
  }
*/
  if (urlPathName.match(/\/notes\/addFile/)) {
    console.log(urlPathName.slice(15));
    addFileController.addFile("fl/file3.txt", urlPathName.slice(15));
  }

  if (urlPathName.match(/\/notes\/file\d\/editFile\/.+/)) {
    console.log("this " + urlPathName.slice(22));
    let file = urlPathName.slice(7, 12);
    addFileController.addFile("fl/" + file + ".txt", urlPathName.slice(22));
  }

  if (urlPathName.match(/\/notes\/file\d/)) {
    let file = "fl/" + urlPathName.slice(7, 12) + ".txt";
    console.log("file is " + file);
    let result = JSON.stringify(fileController.readData(file));
    res.end(result);
  }

  let obj = {
    "/data": "Hello World",
    "/": " ",
    "/notes": JSON.stringify(folderController.getFiles(folder))
  };

  res.end(obj[urlPathName]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
