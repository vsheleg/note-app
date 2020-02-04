const locUrl = "http://localhost:3001/notes";

module.exports = function addNote(note) {
  console.log("note on server " + note);
  fetch(locUrl + "/addFile", {
    method: "POST",
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: note
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
