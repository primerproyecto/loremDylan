const express = require("express");
const cors = require("cors");
const path = require("path");

const v1DylanSongsRoutes = require("./v1/routes/dylanSongs.routes.js");

const port = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/", v1DylanSongsRoutes);
// Establecer la carpeta estática para los archivos públicos
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
