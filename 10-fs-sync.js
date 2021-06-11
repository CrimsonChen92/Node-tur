const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
//the readFileSync will get the info from the file, but giving it the path name, and what you want to get it by utf8
//the writeFileSync(firstexpression,secondexpress), will create a new file if the path doesn't exist.
//Or override the file if it does with, with the second expression
//you can append, aka add more info to an existing file by adding a third exp ib writeFileSync with {flag: "a"}
//the "a" mean append.
