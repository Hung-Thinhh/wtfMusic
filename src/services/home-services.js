import { getPlaylist } from "./history-services";
import Song from "../models/sonng_model.js";
import Playlist from "../models/playlist_model.js";
import Ar from "../models/artists_model.js";
const getNewRelease = async () => {
  try {
    const [vPop, others, all] = await Promise.all([
      Song.find({
        $and: [
          { genresid: { $elemMatch: { $eq: "IWZ9Z087" } } },
          { state: { $ne: 1 } }
        ]
      }).select("artists id songname thumbnail").limit(12),
      Song.find({
        $and: [
          { genresid: { $in: ['IWZ9Z086','IWZ9Z08U'] } },
          { state: { $ne: 1 } }
        ],
      }).select("artists id songname thumbnail").limit(12),
      Song.find({ state: { $ne: 1 } }).sort({ createdAt: -1 }).select("artists id songname thumbnail").limit(12)
    ]);

    const populateArtists = async (songs) => {
      return Promise.all(songs.map(async (song) => {
        const artists = await Ar.find({ id: { $in: song.artists } });
        return { ...song._doc, artists };
      }));
    };

    const newRelease = {
      all: await populateArtists(all),
      vPop: await populateArtists(vPop),
      others: await populateArtists(others)
    };
    return newRelease;
  } catch (error) {
    console.error("Error fetching new releases:", error);
    throw error;
  }
};

const getSongHot = async () => {
  const songHot = await Playlist.find({ state: { $ne: 1 } }).sort({ listen: -1 }).select("playlistname playlistId description thumbnail").limit(5);
  return songHot;
};

const getSongRemix = async () => {
  const songRemix = await Playlist.find({
    genresid: { $in: ["IWZ9Z0BO", "IWZ9Z08B", "IWZ9Z08C"] },
    state: { $ne: 1 }
  }).select("playlistname playlistId description thumbnail")
    .sort({ listen: -1 })
    .limit(5);
  return songRemix;
};

const getSongChill = async () => {
  const songChill = await Playlist.find({
    genresid: { $in: ["IWZ9Z089", "IWZ9Z09B", "IWZ9Z096"] },
    state: { $ne: 1 }
  }).select("playlistname playlistId description thumbnail")
    .sort({ listen: -1 })
    .limit(5);
  return songChill;
};

const getSongSad = async () => {
  const songSad = await Playlist.find({
    genresid: { $in: ["IWZ9Z099"] },
    state: { $ne: 1 }
  }).select("playlistname playlistId description thumbnail")
    .sort({ listen: -1 })
    .limit(5);
  return songSad;
};

const getSongRating = async () => {
  const songRating = await Song.find({ state: { $ne: 1 } }).select("artists id songname thumbnail")
    .sort({ listen: -1, createdAt: -1 })
    .limit(8);
  return songRating;
};

const getSongTop100 = async () => {
  const songTop100 = await Playlist.find({
    playlistname: { $regex: "Top 100", $options: "i" },
    state: { $ne: 1 }
  }).select("playlistname playlistId description thumbnail")
    .sort({ listen: -1 })
    .limit(5);
  return songTop100;
};

const getAlbumHot = async () => {
  const albumHot = await Playlist.find({
    type: "album",
    state: { $ne: 1 }
  }).select("playlistname playlistId description thumbnail")
    .sort({ listen: -1 })
    .limit(5);
  return albumHot;
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
