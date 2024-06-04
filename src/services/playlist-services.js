import Playlist from "../models/playlist_model";
import Song from "../models/sonng_model";
import Genres from "../models/genre_model";

const getPlaylist = async (id) => {
  const playlist = await Playlist.findOne({ playlistId: id, state: { $ne: 1 } });
  if (playlist) {
    const genreId = playlist.genresid;
    const songId = playlist.songid;

    const genres = [];
    const item = [];

    const promiseGenres = genreId.map((id) => {
      return Genres.findOne({ genreId: id })
        .then((genresItem) => {
          if (genresItem) {
            const genresInfo = genresItem;
            genres.push(genresInfo);
          }
        })
        .catch((error) => {
          console.log("Error retrieving playlist:", error);
        });
    });

    const promiseSong = Promise.all(
        songId.map(async (id) => {
          try {
            const songItem = await Song.findOne({ id: id, state: { $ne: 1 } });
            if (songItem) {
              item.push(songItem);
            }
          } catch (error) {
            console.log("Error retrieving playlist:", error);
          }
        })
      ).then(() => {
        item.sort((a, b) => {
          return songId.indexOf(a.id) - songId.indexOf(b.id);
        });
      });

    try {
      const results = await Promise.all([...promiseGenres, promiseSong]);

      if (results.some((result) => result instanceof Error)) {
        console.log("Error retrieving playlist info:", results);

        return {
          EM: "thêm vào lịch sử thất bại!",
          EC: "-1",
          DT: "",
        };
      } else {
        return {
          EM: "thêm vào lịch sử thành công!",
          EC: "0",
          DT: { playlist, genres, song: item },
        };
      }
    } catch (error) {
      console.log("Error retrieving playlist info:", error);

      return {
        EM: "thêm vào lịch sử thất bại!",
        EC: "1",
        DT: "",
      };
    }
  } else {
    return {
      EM: "thêm vào lịch sử thất bại!",
      EC: "1",
      DT: "",
    };
  }
};

module.exports = { getPlaylist };