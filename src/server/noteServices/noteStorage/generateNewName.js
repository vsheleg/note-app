const getFiles = require("./getFiles");

module.exports = function generateNewName(Notes) {
  let result = [];
  Notes.findAll({ raw: true }).then(data => {
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].id);
    }
    result = result.sort();
    let newName = Math.max(...numbers) + 1;
  });
  console.log("newName" + newName);
};
