const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/about-us", function (req, res) {
  res.send("<h1>about us</h1>");
});

app.get("/lucky", function (req, res) {
  let luckyNumber = parseInt(Math.random() * 100 + 1);
  res.send("Lucky number is " + luckyNumber);
});

app.listen(3000, function () {
  console.log("Server has started");
});
