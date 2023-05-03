const express = require("express");
const cors = require("cors");
const path = require("path");
const _ = require("lodash");
const url = require("url");

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
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/* TO GET ALL SONGS FROM JSON FILE */
app.get("/api/v1/all", (req, res) => {
  res.json({ data });
});

/* TO GET ALL SONGS PAGINATED FROM JSON FILE */
app.get("/api/v1/paginated", (req, res) => {
  /* const itemsPerPage = 20; // número de elementos por página
  res.json({
    count: data.length,
    pages: Math.floor(data.length / itemsPerPage),
    prev:
      req.query.page == 1 || data.length < itemsPerPage
        ? null
        : "https://loremdylan-production.up.railway.app/api/v1/paginated/?=" +
          (parseInt(req.query.page) - 1),

    next:
      req.query.page == Math.floor(data.length / itemsPerPage) ||
      data.length < itemsPerPage
        ? null
        : "https://loremdylan-production.up.railway.app/api/v1/paginated/?=" +
          (parseInt(req.query.page) + 1),
    data,
  }); */
  const itemsPerPage = 10; // número de elementos por página
  const array = data; // array original
  const pageNumber = parseInt(req.query.page) || 1; // página actual (por defecto es la primera página)
  const totalPages = Math.ceil(array.length / itemsPerPage); // número total de páginas

  const paginatedArray = _.chunk(array, itemsPerPage)[pageNumber - 1] || []; // array paginado
  const prevPage = pageNumber > 1 ? pageNumber - 1 : null; // número de página anterior (null si no hay página anterior)
  const nextPage = pageNumber < totalPages ? pageNumber + 1 : null; // número de página siguiente (null si no hay página siguiente)

  const prevUrl = prevPage
    ? url.format({
        protocol: req.protocol,
        host: req.get("host"),
        pathname: req.originalUrl.split("?")[0],
        query: { page: prevPage },
      })
    : null; // URL de la página anterior (null si no hay página anterior)

  const nextUrl = nextPage
    ? url.format({
        protocol: req.protocol,
        host: req.get("host"),
        pathname: req.originalUrl.split("?")[0],
        query: { page: nextPage },
      })
    : null; // URL de la página siguiente (null si no hay página siguiente)

  const result = {
    count: array.length,
    currentPage: pageNumber,
    pages: totalPages,
    prevPage: prevUrl,
    nextPage: nextUrl,
    data: paginatedArray,
  };

  res.json(result);
});

/* FRASE ALEATORIA DE UNA CACION DE DYLAN */
app.get("/api/v1/sentence", (req, res) => {
  const randomNumber = Math.floor(Math.random() * data.length);
  const frase = data[randomNumber].lyrics;
  const song = data[randomNumber].song;
  const album = data[randomNumber].album[0];

  const words = frase.split(" ");
  const slicedWords = words.slice(0, 20);
  const sentence =
    slicedWords.join(" ").replace(/(<br>|<br\/>|\n)/gi, " ") + " ...";

  res.json({ sentence, song, album });
});

app.listen(port, () => {
  console.log(`loremDylan app listening on port ${port}`);
});
