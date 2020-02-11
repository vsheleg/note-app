const getFiles = require("./getFiles");

module.exports = function generateNewName(Notes) {
  /*
  const files = getFiles("./server/files");
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(0, -4));
  }
  numbers = numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "./server/files/" + newName + ".txt";
  return newName;
  */
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
