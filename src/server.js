const express = require("express");
const _ = require("lodash");

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
  res.json({ items: data.length, data });
});

/* TO GET ALL SONGS PAGINATED FROM JSON FILE */
app.get("/api/v1/paginated", (req, res) => {
  const itemsPerPage = 10; // número de elementos por página
  const array = data; // array original
  const pageNumber = req.query.page || 1; // página actual (por defecto es la primera página)

  const paginatedArray = _.chunk(array, itemsPerPage)[pageNumber - 1] || []; // array paginado

  res.json(paginatedArray);
});
/* TO GET 10 SONGS FROM JSON FILE */
app.get("/api/v1/10", (req, res) => {
  const filteredData = data.slice(0, 10);
  res.json(filteredData);
});

/* FRASE ALEATORIA DE UNA CACION DE DYLAN */
app.get("/api/v1/frase", (req, res) => {
  const randomNumber = Math.floor(Math.random() * data.length);
  const frase = data[randomNumber].lyrics;
  const cancion = data[randomNumber].song;

  const words = frase.split(" ");
  const slicedWords = words.slice(0, 20);
  const slicedText =
    slicedWords.join(" ").replace(/(<br>|<br\/>|\n)/gi, " ") + " ...";

  res.json({ slicedText, cancion });
});

app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
