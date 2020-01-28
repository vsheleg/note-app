let fetchUrl = require("fetch").fetchUrl;

fetchUrl("http://localhost:3001/data", function(error, meta, body) {
  console.log("ggg");
});
