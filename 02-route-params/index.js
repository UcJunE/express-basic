const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("HELLO AMIGO MAMA MIA BANANA CHERRISESESS");
});

app.get("/pokemon/:pokemonName",function(req,res){
    let pokemon = req.params.pokemonName;
    res.send("You are looking for " + pokemon);
});
//l8 notice the location of : it acts as parameter  and after the : it is a placeholder. 
//l9  when we req.params.pokemonName . the params that we type in will be substitue into the var pokemon.
// any data from params will be a STRING

app.listen(3000, function () {
  console.log("Server has started");
});
