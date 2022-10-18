const express = require("express");
const hbs = require("hbs");

let app = express();

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send(`<a href="/fruits">Fruit form</a>`);
});

app.get("/fruits", function (req, res) {
  res.render("fruits");
});

app.post("/fruits", function (req, res) {
  let total = 0;
  let price = {
    durian: 15,
    apple: 3,
    orange: 6,
    banana: 4,
  };
  let selecteditem = [];

  if (req.body.items) {
    if (Array.isArray(req.body.items) == false) {
      selecteditem.push(req.body.items);
    } else {
      selecteditem = req.body.items;
    }
  }

  //   for (item of selecteditem) {
  //     if (item == "durian") {
  //       total += price[item];
  //     }
  //     if (item == "apple") {
  //       total += price[item];
  //     }
  //     if (item == "orange") {
  //       total += price[item];
  //     }
  //     if (item == "banana") {
  //       total += price[item];
  //     }
  //   }
  for (item of selecteditem) {
    total += price[item];
  }
  console.log(total);
  // TODO: calculate the cost of the selected fruits
  res.send("Total =" + total);
});

app.listen(3000, () => {
  console.log("server started");
});
