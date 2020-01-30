const fs = require("fs");
exports.delete = function(path) {
  console.log("delete");
  return fs.unlinkSync(path);
};
