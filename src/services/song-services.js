import Song from "../models/sonng_model";
import Playlist from "../models/playlist_model";
import Genres from "../models/genre_model";
const { ZingMp3 } = require("zingmp3-api-full-v3")
const getSong = async (id) => {
  const song = await Song.aggregate([
    {
      $match: {
        id: id,
        state: { $ne: 1 }
      }
    },
    {
      $lookup: {
        from: 'genres',
        localField: 'genresid',
        foreignField: 'genreId',
        as: 'genresNames'
      }
    },
    {
      $lookup: {
        from: 'artists',
        localField: 'artists',
        foreignField: 'id',
        as: 'artistsNames'
      }
    }
  ]);

  if (song[0]) {
    const genreId = song[0].genresid;
    const genres = [];
    const promises = genreId.map((id) => {
      return Genres.findOne({ genreId: id })
        .then((genresItem) => {
          if (genres) {
            const genresInfo = genresItem;
            genres.push(genresInfo);
          }
        })
        .catch((error) => {
          console.log("Error retrieving playlist:", error);
        });
    });
    try {
      const results = await Promise.all(promises);
      if (results.some((result) => result instanceof Error)) {
        console.log("Error retrieving playlist info:", results);
        return {
          EM: "Truy cập thông tin nhạc thất bại!",
          EC: "1",
          DT: "",
        };
      } else {
        const haha = await ZingMp3.getSong(id);
        if (haha["msg"] != 'Bài hát chỉ dành cho tài khoản VIP, PRI' && song[0].songLink.includes('?')) {

          song[0].songLink = haha.data["128"]
        }
        return {
          EM: "Truy cập thông tin nhạc thành công!",
          EC: "0",
          DT: { song: song[0], genres },
        };
      }
    } catch (error) {
      console.log("Error retrieving playlist info:", error);
      return {
        EM: "Truy cập thông tin nhạc thất bại!",
        EC: "1",
        DT: "",
      };
    }
  } else {
    return {
      EM: "Truy cập thông tin nhạc thất bại!",
      EC: "1",
      DT: "",
    };
  }
};
const getSongRelated = async (id) => {
  const song = await Song.aggregate([
    {
      $match: {
        id: id,
        state: { $ne: 1 }
      }
    }
  ]);

  if (song && song[0]) {
    const genreId = song[0].genresid;
    const genres = [];
    const promises = genreId.map((id) => {
      return Genres.findOne({ genreId: id })
        .then((genresItem) => {
          // Nếu tìm thấy playlist, thêm thông tin vào mảng playlistInfoArray

          const genresInfo = genresItem;
          genres.push(genresInfo);

        })
        .catch((error) => {
          console.log("Error retrieving playlist:", error);
        });
    });
    console.log(genres);

    try {
      const results = await Promise.all(promises);
      if (results.some((result) => result instanceof Error)) {
        console.log("Error retrieving playlist info:", results);
        return {
          EM: "Truy cập thông tin nhạc thất bại!",
          EC: "1",
          DT: "",
        };
      } else {
        const songRelated = await Song.find({
          genresid: { $in: song[0].genresid },
          state: { $ne: 1 }
        })
          .sort({ createdAt: -1 })
          .limit(12);
        const playlistRelated = await Playlist.find({
          genresid: { $in: song[0].genresid },
        })
          .sort({ createdAt: -1 })
          .limit(5);
        return {
          EM: "Truy cập thông tin nhạc thành công!",
          EC: "0",
          DT: { song: song[0], songRelated, playlistRelated },
        };
      }
    } catch (error) {
      console.log("Error retrieving playlist info:", error);
      return {
        EM: "Truy cập thông tin nhạc thất bại!",
        EC: "1",
        DT: "",
      };
    }
  } else {
    return {
      EM: "Truy cập thông tin nhạc thất bại!",
      EC: "1",
      DT: "",
    };
  }
};

module.exports = { getSong, getSongRelated };
