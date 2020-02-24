const BASEURI = "http://localhost:3002/";

async function request(path, params = {}) {
  // let token = await localStorage.getItem(key);
  return fetch(BASEURI + path, {
    ...params,
    headers: {
      //token: token,
      "Content-Type": "application/json",
      ...(params.headers || {})
    }
  }).then(response => response.json());
}

function deleteData(url) {
  return request(url, {
    method: "delete"
  });
}

function get(url) {
  return request(url);
}

function post(url, data) {
  return request(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export default { get, post, deleteData };
