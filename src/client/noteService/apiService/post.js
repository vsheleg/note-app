const apiUrl = "notes/";

function post(url, bodyData) {
  console.log(url + apiUrl);
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
