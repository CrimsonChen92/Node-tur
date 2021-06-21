const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

//pretty much to use all event, rather, its stream, http, or standard. you need to do .on("built in"), which is data in this case
//default amount is 64kb
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) this will make it 90kb if instead of standard 64kb
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' }) // this will show what the data is actually showing
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
