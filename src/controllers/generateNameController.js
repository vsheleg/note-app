const fs = require("fs");
const folderController = require("./folderController.js");
const folder = ".//fl/";

exports.generateName = function() {
  const files = folderController.getFiles(folder);
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(0, -4));
  }
  numbers = numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "./fl/" + newName + ".txt";
  return newName;
};
