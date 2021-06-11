const { readFile, writeFile } = require("fs");

//readFile works by writing a callback, callback is just an function/eventListener that runs when called
//noticed, there's 3 para. first is the path, second is what you want to get back which is the string.
//3rd one is the call back, which is an unanm fn
console.log("start");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `THE NEW RESULT: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
