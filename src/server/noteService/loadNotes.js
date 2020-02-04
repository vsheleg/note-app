const fs = require("fs");
const locUrl = "http://localhost:3001/notes";

module.exports = function loadNotes() {
  fetch(locUrl)
    .then(response => response.json())
    .then(response => {
      console.log("this is response " + response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};
