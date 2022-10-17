const { application } = require("express");
const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

let app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/faulty",function(req,res){
  res.render("faulty");
})

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
