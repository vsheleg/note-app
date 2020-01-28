const fs = require("fs");
exports.readData = function(path) {
  let result = ["" + fs.readFileSync(path)];
  console.log(result);
  return result;
};
