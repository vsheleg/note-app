const fs = require("fs");
exports.getFiles = function(path) {
  console.log("open files in folder");
  return fs.readdirSync(path);
};
