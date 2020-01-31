//noteservices
const fs = require("fs");
const url = require("url");
const addNote = require("./noteService/addNote");
const deleteNote = require("./noteService/deleteNote");

//const noteServices = require("./noteService/");

exports.findEndPoint = function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  let obj = new Map();
  obj.set(/\/notes\/\d+.txt\/delete/, function() {
    return deleteNote(urlPath);
  });
  obj.set(/\/notes\/\d+.txt\/read/, function() {
    return readNote(urlPath);
  });
  obj.set(/notes\/addFile/, function() {
    return addNote(req, res);
  });

  obj.set(/\/notes/, function() {
    return getNotes("../client/fl/");
  });
  obj.set(/\//, function() {
    return "";
  });
  for (let [key, value] of obj) {
    if (urlPath.match(key)) {
      let result = obj.get(key)();
      return result;
    }
  }
};

function getNotes(path) {
  return fs.readdirSync(path);
}
function getNameOfFile(path) {
  let fileName = path.match(/\/notes\/(\d+).txt/)[1];
  return "../client/fl/" + fileName + ".txt";
}
function readNote(path) {
  let file = getNameOfFile(path);
  let result = ["" + fs.readFileSync(file)];
  return result;
}
