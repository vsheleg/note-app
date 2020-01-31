const addNote = require("./controllers/addFileController.js");
const url = require("url");

exports.addHandler = function(req, res) {
  let urlParts = url.parse(req.url, true);
  let urlPath = urlParts.pathname;
  let regexp = /notes\/addFile/;
  if (req.method === "POST") {
    let body = "";

    req.on("data", function(data) {
      body += data.toString();
    });
    req.on("end", () => {
      let path = generateNameController.generateName();
      console.log("path is " + path);
      // addFileController.addFile(path, body);
      //res.end(body);
      return urlPath.match(regexp);
    });
  }
};
