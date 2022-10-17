const express = require("express");
const app = express();

const hbs = require("hbs");
const wax = require("wax-on");

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/:place", function (req, res) {
  let place = req.params.place;
  console.log(place);
  res.render(place);
});

wax.on(hbs.handlebars);
wax.setLayoutPath()

app.listen(3000, function () {
  console.log("server has started in port 3000");
});
