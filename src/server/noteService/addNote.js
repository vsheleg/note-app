const fs = require("fs");
const folder = "../client/fl/";

function getNotes(path) {
  return fs.readdirSync(path);
}

module.exports = function addNote(req, res) {
  let path = generateName();
  if (req.method === "POST") {
    let body = "";
    req.on("data", function(data) {
      body += data.toString();
      fs.writeFile(path, body, function(err) {
        if (err) throw err;
      });
    });
    req.on("end", () => {
      res.end(body);
      return body;
    });
  }
};
function generateName() {
  const files = getNotes(folder);
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(0, -4));
  }
  numbers = numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "../client/fl/" + newName + ".txt";
  return newName;
}
