const express = require("express");
const cors = require("cors");
const path = require("path");

const dylanSongs = require("./data/bobDylanSongs.json");

const v1DylanSongsRoutes = require("./v1/routes/dylanSongs.routes.js");

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/allDylanSongs", async function (req, res) {
  const data = dylanSongs;
  res.render("allDylanSongs", { data });
});
app.get("/sentence", async function (req, res) {
  const data = dylanSongs;
  res.render("sentence", { data });
});

app.use(express.json());
app.use("/api/v1/", v1DylanSongsRoutes);
// Establecer la carpeta estática para los archivos públicos
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
