const http = require("http");
const fs = require("fs").promises;

const requestListener = function(req, res) {
  console.log(req.url);

  if (req.url === "/") {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
          res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" }).end(contents);
        });
  } else if (req.url === "/info.json") {
    fs.readFile(__dirname + "/info.json")
        .then(contents => {
          res.writeHead(200, { "Content-Type": "application/json; charset=UTF-8" }).end(contents);
        });
  } else if (req.url === "/assets/styles.css") {
      fs.readFile(__dirname + "/assets/styles.css")
          .then(contents => {
              res.writeHead(200, { "Content-Type": "text/css; charset=UTF-8" }).end(contents);
          });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("404 Not Found");
  }
};

const server = http.createServer(requestListener);
const host = "127.0.0.1";
const port = "8080";

server.listen(port, host, () => {
  console.log('Server is running');
});
