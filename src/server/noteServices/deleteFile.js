const fs = require("fs");
exports.deleteN = function(path) {
  console.log("delete");
  return fs.unlinkSync(path);
};
