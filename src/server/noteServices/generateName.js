const fs = require("fs");
const folderController = require("./openFolder.js");
const folder = "../client/fl/";

exports.generateName = function() {
  const files = folderController.getFiles(folder);
  let numbers = [];
  for (let i = 0; i < files.length; i++) {
    numbers.push(files[i].slice(0, -4));
  }
  numbers = numbers.sort();
  let newName = Math.max(...numbers) + 1;
  newName = "../client/fl/" + newName + ".txt";
  return newName;
};
