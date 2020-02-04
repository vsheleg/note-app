module.exports = function deleteData(url, file) {
  console.log(url + file + "/delete");
  fetch(url + file + "/delete", {
    method: "delete"
  });
};
