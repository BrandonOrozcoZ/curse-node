const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to curse node.js");
    return res.end();
  }
  if (req.url === "/about") {
    /* // Blocking code
    for (let i = 0; i < 1000; i++) {
      console.log(Math.random() * i);
    } */

    return res.end("About page");
  }
  res.end("Not found");
});

server.listen(3000);
console.log("Server on port 3000");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");
