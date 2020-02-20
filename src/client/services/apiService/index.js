const BASEURI = "http://localhost:3002/";

function request(path, params = {}) {
  return fetch(BASEURI + path, {
    headers: {
      "Content-Type": "application/json",
      ...(params.headers || {})
    },
    ...params
  });
}

function deleteData(url, elem, endpoint) {
  return request(url + elem + endpoint, {
    method: "delete"
  });
}

function get(url, queryData) {
  return request(url + queryData).then(response => response.json());
}

function post(url, elem, bodyData, endPoint) {
  return request(url + elem + endPoint, {
    method: "POST",
    body: JSON.stringify(bodyData)
  }).then(response => response.json());
}

export default { get, post, deleteData };
