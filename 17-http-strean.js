var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    //by using the two //code below, it take 1.8mb to go access localhost.5000, that's alot of data usage.
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    //below we use the createReadSteam method.
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    //we use .on("open")
    //and on the callback, we use the pipe method, we make the read stream into a writable stream.
    //response is now in chunks.
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
