const fs = require("fs");
exports.getFiles = function(path) {
  return fs.readdirSync(path);
};
