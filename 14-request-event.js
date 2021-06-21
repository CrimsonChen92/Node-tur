const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
//sever have an on event too, and right now we are using the "request" function, which is built in to listen and not
//some random string you make
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
