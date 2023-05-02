const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const data = require("../data/bobDylanSongs.json");

const filteredData = data.slice(0, 10);
app.use(
  cors({
    origin: "*",
  })
);
app.get("/api/v1/all", (req, res) => {
  console.log("estamos escuchando", data);
  /*  res.json(JSON.stringify(data)); */
  res.json({ filteredData });
});

app.get("/", (req, res) => {
  console.log("estamos escuchando", data);
  /* res.json({ titulo: "cancion" }); */
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000);
