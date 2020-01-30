const fs = require("fs");

exports.addFile = function(path, text) {
  fs.writeFile(path, text, function(err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
  return 0;
};
