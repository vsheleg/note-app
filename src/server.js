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
  let file = "fl/" + urlPathName.slice(7, 12) + ".txt/";

  if (urlPathName.match(/notes\/addFile/)) {
    if (req.method === "POST") {
      let body = "";
      req.on("data", function(data) {
        body += data.toString();
        console.log(data);
      });
      req.on("end", () => {
        console.log(body);
        let path = generateNameController.generateName();
        console.log("path is " + path);
        addFileController.addFile(path, body);
        res.end(body);
      });
    }
  }

  urlPathName = urlPathName.slice(0, 12) + urlPathName.slice(16); //delete  and .txt extension
  if (urlPathName.match(/\/notes\/file\d\/editFile\/.+/)) {
    addFileController.addFile(file, urlPathName.slice(22));
  }
  if (urlPathName.match(/\/notes\/file\d\/delete/)) {
    deleteController.delete(file.slice(0, -1));
    res.end("");
  }
  if (urlPathName.match(/\/notes\/file\d+\/read/)) {
    //delete file
    //return match
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
