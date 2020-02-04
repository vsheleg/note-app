const url = require("url");
const defineRoutes = require("./routes");

const routes = defineRoutes();

module.exports = function handleEndPoint(req, res) {
  let urlParts = url.parse(req.url, true);
  const urlPath = urlParts.pathname;

  for (let [template, handler] of routes) {
    if (urlPath.match(template)) {
      let result = routes.get(template)(req, res);
      return result;
    }
  }
};
