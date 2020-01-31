//noteservices
const getFilesinFolder = require("./noteServices/openFolder.js");
const generateName = require("./noteServices/generateName.js");
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
    const file = getNameOfFile(urlPath);
    deleteNote.deleteN(file);
    return "";
  });

  obj.set(/\/notes\/\d+.txt\/read/, function() {
    const file = getNameOfFile(urlPath);
    return readNote.readData(file);
  });
  obj.set(/notes\/addFile/, function() {
    if (req.method === "POST") {
      let body = "";
      req.on("data", function(data) {
        body += data.toString();
      });
      req.on("end", () => {
        let path = generateName.generateName();
        addNote.addFile(path, body);
        return body;
      });
    }
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
