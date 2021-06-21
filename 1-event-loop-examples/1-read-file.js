const { readFile } = require("fs");

console.log("start a first task");
//readFile is async, and that's why completed first task log last.. also check filePath to make sure it's correct
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
