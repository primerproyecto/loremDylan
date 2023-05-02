const express = require("express");

const cors = require("cors");
const path = require("path");

const data = require("../data/bobDylanSongs.json");

const port = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

/* TO GET ALL SONGS FROM JSON FILE */
app.get("/api/v1/all", (req, res) => {
  res.json([data]);
});
/* TO GET 10 SONGS FROM JSON FILE */
app.get("/api/v1/10", (req, res) => {
  const filteredData = data.slice(0, 10);
  res.json([filteredData]);
});

app.get("/", (req, res) => {
  /* res.json({ titulo: "cancion" }); */
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
