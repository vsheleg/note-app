const getFiles = require("./getFiles");

module.exports = function generateNewName() {
  const files = getFiles("./server/files");
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(0, -4));
  }
  numbers = numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "./server/files/" + newName + ".txt";
  return newName;
};
