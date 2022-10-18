const { application } = require("express");
const express = require("express");
const baseModule = require("hbs");
const hbs = require("hbs");
const wax = require("wax-on");

let app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");
hbs.handlebars

app.get("/", function (req, res) {
  res.render("index");
});

app.get('/luckyNumber',function(req,res){
  let luckyNumber = Math.floor(Math.random()*100 +1);
  console.log(luckyNumber);
  res.render("lucky",{
    "luckyNumber":luckyNumber
  })
})

//additional info can look for hbs helpers  and 188 hbs helper on github

app.get("/fav_food/:fruit",function(req,res){
  let favFruit =req.params.fruit;

  res.render('favourite',{
    'fruit':favFruit
  })
})

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
