const locUrl = "http://localhost:3001/notes/";

module.exports = function editNote(elem, file) {
  fetch(locUrl + file + "/edit", {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: elem
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
