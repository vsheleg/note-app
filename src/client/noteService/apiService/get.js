const apiUrl = "/notes/";

function get(url, queryData) {
  return fetch(url + apiUrl + queryData).then(response => response.json());
}

export default { get };
