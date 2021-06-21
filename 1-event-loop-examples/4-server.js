const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World1");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});

//listsen is async. So the event loop is now listening.
