const dylanSongModel = require("../data/dylanSong");
const url = require("url");
const _ = require("lodash");

const getAllDylanSongs = () => {
  const allDylanSongs = dylanSongModel.getDylanData();
  return allDylanSongs;
};
const getAllDylanSongsPaginated = (req, res) => {
  const itemsPerPage = 10; // número de elementos por página
  const array = dylanSongModel.getDylanData(); // array original
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
  return result;
};
const getOneDylanSentence = () => {
  const randomNumber = Math.floor(
    Math.random() * dylanSongModel.getDylanData().length
  );
  const frase = dylanSongModel.getDylanData()[randomNumber].lyrics;
  const song = dylanSongModel.getDylanData()[randomNumber].song;
  const album = dylanSongModel.getDylanData()[randomNumber].album;

  const words = frase.split(" ");
  const slicedWords = words.slice(0, 20);
  const sentence =
    slicedWords.join(" ").replace(/(<br>|<br\/>|\n)/gi, " ") + " ...";
  return { sentence, song, album };
};

module.exports = {
  getAllDylanSongs,
  getAllDylanSongsPaginated,
  getOneDylanSentence,
};
