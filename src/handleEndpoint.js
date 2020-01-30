const readNote = require("./controllers/fileController.js");
const openFolder = require("./controllers/folderController.js");
const addNote = require("./controllers/addFileController.js");
const deleteNote = require("./controllers/deleteController.js");
const generateNameController = require("./controllers/generateNameController.js");
const url = require("url");
let urlStart = /\notes/;

function getNameOfFile(urlPath, regexp) {
  let file = urlPath.match(regexp)[1];
  return "fl/" + file;
}

function editHandler(req, res) {
  //make post request
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  let file = getNameOfFile(urlPath, /\/notes\/(\d+.txt)\/editFile\/.+/);
}
function deleteHandler(req, resp) {
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  let file = getNameOfFile(urlPath, /\/notes\/(\d+.txt)\/delete/);
  return urlPath.match(/\/notes\/\d+.txt\/delete/);
}
function readHandler(req, res) {
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  let file = getNameOfFile(urlPath, /\/notes\/(\d+.txt)\/delete/);
  return urlPath.match(/\/notes\/\d+.txt\/read/);
}
function addHandler(req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
    });
    req.on("end", () => {
      let path = generateNameController.generateName();
      console.log("path is " + path);
      addFileController.addFile(path, body);
      //res.end(body);
    });
  }
  return urlPath.match(/notes\/addFile/);
}
