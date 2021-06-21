const { readFile, writeFile } = require("fs").promises; //so by putting .promise in the end of require, you can
//write the async await code below.

//or you can not use .promise, and do util and promisify readFile and writeFile, and use that const over the readFile
//WriteFile const next to await.
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8"); //would be readFilePromise("","") if we use the util route
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

//**** we usually use PROMISE for one action. As you can see on the example above with async await, we use that since
//there are multiple Promises needed to read multiple files.

//Below is a promise code, to make it async.
//where you make a promise with 2para, resolve and reject. and readFile, with a path.
//If error then reject, else resolve.
//Then you finally call this getText(enter path link here)
//and finally, give it a .then and .catch.

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
