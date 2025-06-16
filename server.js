const http = require("http");
const helloHandler = require("./routes/hello");

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   // res.end("Hello World");
//   res.end(JSON.stringify({ message: "Hello World" }));
// });

const server = http.createServer(helloHandler);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
