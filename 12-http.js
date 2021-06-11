const http = require("http");

//createServer needs a fn, with two para. First is called request, where the client request something.
//Then the second para is response, which is what we are sending back to the client side.
//res.write is what we response to the client. res.end() is need to show that the response is done.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else
    res.end(`<h1>Oops!</h1>
  <p>we can't seem to find the page you are looking for</p>
  <a href="/">back home </a>`);
});

//we also need to state what port the server is listening to by the code below.
server.listen(5000);

//now when we run node thisfilename, you'll see it's keep running, bc we have made a server, and if you go to
//localhost:5000, you'll see this server.
