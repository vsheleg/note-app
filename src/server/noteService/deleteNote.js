const locUrl = "http://localhost:3001/notes";
module.exports = function deleteNote(note) {
  console.log("delfetch ");
  fetch(locUrl + "/" + note + "/delete")
    .then(response => response.json())
    .then(response => {})
    .catch(function(error) {
      console.log(error);
    });
};
