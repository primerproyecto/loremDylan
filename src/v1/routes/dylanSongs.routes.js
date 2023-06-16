const express = require("express");
const router = express.Router();

const bobDylanController = require("../../controllers/dylanSongs.controller");

router
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  })
  .get("/all", bobDylanController.getAllDylanSongs)
  .get("/paginated", bobDylanController.getAllDylanSongsPaginated)
  .get("/sentence", bobDylanController.getOneDylanSentence)
  .get("/all/:id", bobDylanController.getOneDylanSong);

module.exports = router;
