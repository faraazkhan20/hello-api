module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify({ message: "Hello World" }));
  // res.end(JSON.stringify({ message: "Welcome to my API" }));
  res.end(JSON.stringify({ message: "hello faraaz!" }));
};
