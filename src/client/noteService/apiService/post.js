const apiUrl = "notes/";

function post(url, bodyData) {
  fetch(url + apiUrl, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: bodyData
  });
}
export default { post };
