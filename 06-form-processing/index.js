const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

let app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  let foodName = req.body.foodName;
  let calories = req.body.calories;
  let meal = req.body.meal;
  let tag = req.body.tags;
  let selectedTags = null;
  console.log(foodName, calories, meal, tag);

  if (req.body.tag) {
    if (Array.isArray(req.body.tag)) {
      selectedTags = req.body.tag;
    } else {
      selectedTags = [req.body.tag];
    }
  } else {
    selectedTags = [];
  }

  res.render("food_summary", {
    foodName: foodName,
    calories: calories,
    meal: meal,
    tag: selectedTags,
  });
});

app.listen(3000, function () {
  console.log("Server started on porto 3000");
});
