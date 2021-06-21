const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}

//this is to create a txt file with 10000 lines of info.. a big file.
//so on lecture 16 we can use stream to read/write/duplex/transform it as neccessary.
