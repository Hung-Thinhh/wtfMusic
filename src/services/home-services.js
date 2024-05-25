import { getPlaylist } from "./history-services";
import Song from "../models/sonng_model.js";
import Playlist from "../models/playlist_model.js";

const getNewRelease = async () => {
  const vPop = await Song.find({
    genresid: { $elemMatch: { $eq: "IWZ9Z087" } },
  }).limit(12);
  const others = await Song.find({
    $or: [
      { genresid: { $elemMatch: { $eq: "IWZ9Z086" } } },
      { genresid: { $elemMatch: { $eq: "IWZ9Z08U" } } },
    ],
  }).limit(12);
  const all = await Song.find().sort({ createdAt: -1 }).limit(12);

  const newRelease = { all: all, vPop: vPop, others: others };
  return newRelease;

  // Lặp qua từng id playlist
};
const getSongHot = async () => {
  const songHot = await Playlist.find().sort({ listen: -1 }).limit(5);
  return songHot;
};
const getSongRemix = async () => {
  const songRemix = await Playlist.find({
    genresid: { $in: ["IWZ9Z0BO", "IWZ9Z08B", "IWZ9Z08C"] },
  })
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};
const getSongChill = async () => {
  const songRemix = await Playlist.find({
    genresid: { $in: ["IWZ9Z089", "IWZ9Z09B", "IWZ9Z096"] },
  })
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};
const getSongSad = async () => {
  const songRemix = await Playlist.find({
    genresid: { $in: ["IWZ9Z099"] },
  })
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};
const getSongRating = async () => {
  const songRemix = await Song.find()
    .sort({ listen: -1, createdAt: -1 })
    .limit(8);
  return songRemix;
};
const getSongTop100 = async () => {
  const songRemix = await Playlist.find({
    playlistname: { $regex: "Top 100", $options: "i" },
  })
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};
const getAlbumHot = async () => {
  const songRemix = await Playlist.find({
    type: "album",
  })
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};
module.exports = {
  getNewRelease,
  getSongHot,
  getSongRemix,
  getSongChill,
  getSongTop100,
    getAlbumHot,
    getSongRating,
    getSongSad
};
