module.exports = function get(url, queryData) {
  return fetch(url).then(response => response.json());
};
