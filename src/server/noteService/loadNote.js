const locUrl = "http://localhost:3001/notes/";

module.exports = function loadNote(file) {
  console.log(locUrl + file + "/read");
  let obj = { val: false, content: "", loading: true };
  fetch(locUrl + file + "/read")
    .then(response => response.json())
    .then(response => {
      obj.content = response.join("");
      return obj;
    });
};
