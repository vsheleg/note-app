const fs = require("fs");
const folderController = require("./folderController.js");
const folder = ".//fl/";

exports.generateName = function() {
  const files = folderController.getFiles(folder);
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(4, -4));
  }
  numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "./fl/file" + newName + ".txt";
  return newName;
};
