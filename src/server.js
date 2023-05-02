const express = require("express");

const cors = require("cors");
const path = require("path");

const data = require("../data/bobDylanSongs.json");

const filteredData = data.slice(0, 2);

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.get("/api/v1/all", (req, res) => {
  /*  res.json(JSON.stringify(data)); */
  res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
});

app.get("/", (req, res) => {
  /* res.json({ titulo: "cancion" }); */
  res.sendFile(path.resolve(__dirname, "index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
