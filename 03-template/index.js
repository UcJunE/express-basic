const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index.hbs");
});

app.get("/greeting/:firstName/:lastName", function (req, res) {
  let firstName = req.params.firstName;
  let lastName = req.params.lastName;
  res.render("greet",{
    "firstName":firstName,
    "lastName":lastName
  });
});

app.listen(3000, function () {
  console.log("server has started at port 3000");
});

