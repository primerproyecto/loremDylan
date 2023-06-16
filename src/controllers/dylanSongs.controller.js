const dylanSongsService = require("../services/dylanSongs.service");

const getAllDylanSongs = (req, res) => {
  const data = dylanSongsService.getAllDylanSongs();
  res.json({ data });
};

const getAllDylanSongsPaginated = (req, res) => {
  const allDylanSongsPaginated = dylanSongsService.getAllDylanSongsPaginated(
    req,
    res
  );

  res.json(allDylanSongsPaginated);
};

const getOneDylanSentence = (req, res) => {
  const oneDylanSentence = dylanSongsService.getOneDylanSentence();

  res.json(oneDylanSentence);
};

const getOneDylanSong = (req, res) => {
  const { id } = req.params;
  const oneDylanSong = dylanSongsService.getAllDylanSongs().filter((item) => {
    return item.id === id;
  });
  res.json(oneDylanSong);
};

module.exports = {
  getAllDylanSongs,
  getAllDylanSongsPaginated,
  getOneDylanSentence,
  getOneDylanSong,
};
