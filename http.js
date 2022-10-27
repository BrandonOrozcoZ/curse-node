const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to my server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("About me");
    return response.end();
  }

  response.write(`
    <h1>Not found</h1>
    <p>This page is unavailable</p>
    <a href="/">Return to lobby</a>`);
  response.end();
});

server.listen(3000);

console.log("Server listening in port 3000");
