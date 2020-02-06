const apiUrl = "notes";

function get(url, queryData) {
  console.log(url + apiUrl + queryData);
  return fetch(url + apiUrl + queryData).then(response => response.json());
}

export default { get };
