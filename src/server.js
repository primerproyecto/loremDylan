const express = require("express");
const app = express();

const data = require("../data/bobDylanSongs.json");

app.get("/api/v1/all", (req, res) => {
  console.log("estamos escuchando", data);
  res.json(data);
});

app.listen(3000);
