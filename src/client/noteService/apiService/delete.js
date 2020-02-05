const apiUrl = "notes/";

function deleteData(url, file) {
  fetch(url + apiUrl + file + "/delete", {
    method: "delete"
  });
}

export default { deleteData };
