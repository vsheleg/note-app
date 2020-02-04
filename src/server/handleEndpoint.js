const url = require("url");
const defineRoutes = require("./routes");

module.exports = function handleEndPoint(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;
  console.log(urlPath);
  let routes = defineRoutes(req, res);

  for (let [template, handler] of routes) {
    if (urlPath.match(template)) {
      let result = routes.get(template)(req, res);
      return result;
    }
  }
};
