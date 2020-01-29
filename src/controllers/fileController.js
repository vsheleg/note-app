const fs = require("fs");
exports.readData = function(path) {
  let result = ["" + fs.readFileSync(path)];
  return result;
};
