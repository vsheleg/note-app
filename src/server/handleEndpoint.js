//noteservices
const getFilesinFolder = require("./noteServices/openFolder.js");
const generateName = require("./noteServices/generateName.js");
const deleteNote = require("./noteServices/deleteFile.js");
const readNote = require("./noteServices/fileRead.js");
const addNote = require("./noteServices/addFile.js");
const url = require("url");
let urlStart = /\/notes\/(\d+).txt/;

function getNameOfFile(urlPath) {
  let regexp = urlStart;
  let file = urlPath.match(regexp)[1];
  return "../client/fl/" + file + ".txt";
}
//const file = getNameOfFile(urlPath);

function deleteNoteHandler(urlPath) {
  let regexp = /\/notes\/(\d+).txt\/delete/;
  return urlPath.match(regexp);
}
function readNoteHandler(urlPath) {
  let regexp = /\/notes\/\d+.txt\/read/;
  return urlPath.match(regexp);
}

function addNoteHandler(req, res) {
  console.log("new note");
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  let regexp = /\/notes\/addFile/;
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
    });
    req.on("end", () => {
      if (urlPath.match(regexp)) {
        console.log("body " + body);
        let path = generateName.generateName();
        addNote.addFile(path, body);
        res.end(body);
        return body;
      } else {
        return false;
      }
    });
  }
}
exports.findEndPoint = function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  if (urlPath == "/") {
    return [""];
  } else if (urlPath == "/notes") {
    return getFilesinFolder.getFiles("../client/fl/");
  }
  if (deleteNoteHandler(urlPath)) {
    const file = getNameOfFile(urlPath);
    deleteNote.deleteN(file);
    return "";
  } else if (addNoteHandler(req, res)) {
  } else if (readNoteHandler(urlPath)) {
    const file = getNameOfFile(urlPath);
    return readNote.readData(file);
  }
};
