const apiUrl = "notes/";

function deleteData(url, file, endpoint) {
  fetch(url + apiUrl + file + endpoint, {
    method: "delete"
  });
}

export default { deleteData };
