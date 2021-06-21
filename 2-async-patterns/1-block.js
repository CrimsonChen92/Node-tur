const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // blocking code, this code is not async, so now until all this for loops run, your "/" page and about page will
    //will stop and not function until the code is finally all done.
    //That is why, we need to do async.
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
