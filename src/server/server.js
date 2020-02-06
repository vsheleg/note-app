const http = require("http");
const url = require("url");
const fs = require("fs");
const handleEndpoint = require("./handleEndpoint");
var isPromise = require("is-promise");

const port = 3001;

const server = http.createServer((req, res) => {
  res = setHeaders(res);
  res.statusCode = 200;
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  let result = handleEndpoint(req, res);
  res.end(JSON.stringify(result));
});
server.listen(port);

setHeaders = res => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  return res;
};
