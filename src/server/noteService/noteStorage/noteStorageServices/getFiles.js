const fs = require("fs");

module.exports = function getFiles(path) {
  return fs.readdirSync(path);
};
