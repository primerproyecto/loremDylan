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

module.exports = {
  getAllDylanSongs,
  getAllDylanSongsPaginated,
  getOneDylanSentence,
};
