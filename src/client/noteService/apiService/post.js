const apiUrl = "notes/";

function post(url, file, bodyData, endPoint) {
  fetch(url + apiUrl + file + endPoint, {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: bodyData
  });
}
export default { post };
