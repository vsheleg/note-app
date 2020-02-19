function post(url, bodyData) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  });
}

function get(url, bodyData) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  });
}

export default { post, get };
