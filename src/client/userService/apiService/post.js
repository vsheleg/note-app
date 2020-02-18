let apiUrl = "user/";

export default function post(url, endpoint, bodyData) {
  return fetch(url + apiUrl + endpoint, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  });
}
