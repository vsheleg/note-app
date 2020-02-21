const BASEURI = "http://localhost:3002/";

async function request(path, params = {}) {
  let result = await fetch(BASEURI + path, {
    headers: {
      "Content-Type": "application/json",
      ...(params.headers || {})
    },
    ...params
  }).then(response => response.json());
  return result;
}

function deleteData(url) {
  return request(url, {
    method: "delete"
  });
}

function get(url) {
  return request(url, {});
}

function post(url, data) {
  return request(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export default { get, post, deleteData };
