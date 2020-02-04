module.exports = function post(url, queryData) {
  fetch(url, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: queryData
  });
};
