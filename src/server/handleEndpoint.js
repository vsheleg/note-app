//noteservices
const getFilesinFolder = require("./noteServices/openFolder.js");

const deleteNote = require("./noteServices/deleteFile.js");
const readNote = require("./noteServices/fileRead.js");
const addNote = require("./noteServices/addFile.js");
const url = require("url");
let urlStart = /\/notes\/(\d+).txt/;

exports.findEndPoint = function(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  let obj = new Map();
  obj.set(/\/notes\/\d+.txt\/delete/, function() {
    deleteNote.deleteFile(urlPath);
  });
  obj.set(/\/notes\/\d+.txt\/read/, function() {
    return readNote.readFile(urlPath);
  });
  obj.set(/notes\/addFile/, function() {
    return addNote.addFile(req, res);
  });

  obj.set(/\/notes/, function() {
    return getFilesinFolder.getFiles("../client/fl/");
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
