const fs = require("fs");
exports.addFile = function(pathToFile, text) {
  fs.writeFile(pathToFile, text, function(err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
};
