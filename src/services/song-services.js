import Song from "../models/sonng_model";
import Playlist from "../models/playlist_model";
import Genres from "../models/genre_model";
const { ZingMp3 } = require("zingmp3-api-full-v3");
const getSong = async (id) => {
  try {
    const songResult = await Song.aggregate([
      {
        $match: {
          id: id,
          state: { $ne: 1 },
        },
      },
      {
        $lookup: {
          from: "artists",
          localField: "artists",
          foreignField: "id",
          pipeline: [
            {
              $project: {
                _id: 0,
                id: 1,
                artistsName: 1,
                avt: 1,
                alias: 1,
              },
            },
          ],
          as: "artistInfo",
        },
      },
      {
        $lookup: {
          from: "genres",
          localField: "genresid",
          foreignField: "genreId",
          pipeline: [
            {
              $project: {
                _id: 0,
                genreId: 1,
                genrename: 1,
              },
            },
          ],
          as: "genres",
        },
      },
      {
        $project: {
          _id: 0,
          artistInfo: 1,
          genres: 1,
          id: 1,
          songname: 1,
          thumbnail: 1,
          alias: 1,
          like: 1,
          listen: 1,
          songLink: 1,
          duration: 1,
          lyric: 1,
        },
      },
    ]);

    const song = songResult[0];
    if (!song) {
      return {
        EM: "Truy cập thông tin nhạc thất bại!",
        EC: "1",
        DT: "",
      };
    }

    

    // Lấy link nhạc mới nếu cần
    const haha = await ZingMp3.getSong(id);
    console.log("mp3", haha);
    if (
      haha?.msg !== "Bài hát chỉ dành cho tài khoản VIP, PRI" &&
      haha?.data?.["128"] &&
      song.songLink?.includes("?")
    ) {
      song.songLink = haha.data["128"];
    }

    return {
      EM: "Truy cập thông tin nhạc thành công!",
      EC: "0",
      DT: { song},
    };
  } catch (error) {
    console.error("Lỗi khi lấy thông tin bài hát:", error);
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
        state: { $ne: 1 },
      },
    },
    {
      $lookup: {
        from: "artists",
        localField: "artists",
        foreignField: "id",
        as: "artistInfo",
      },
    },
    {
      $project: {
        _id: 0,
        // Các trường khác bạn muốn giữ lại
        artistInfo: 1, // Giữ lại thông tin genres
        genresid: 1,
        id: 1,
        songname: 1,
        thumbnail: 1,
        alias: 1,
        artists: 1,
        like: 1,
        listen: 1,
        songLink: 1,
        duration: 1,
      },
    },
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
        // const songRelated = await Song.find({
        //   genresid: { $in: song[0].genresid },
        //   state: { $ne: 1 },
        // })
        //   .sort({ createdAt: -1 })
        //   .limit(12);
        const songRelated = await Song.aggregate([
          {
            $match: {
              genresid: { $in: song[0].genresid },
              state: { $ne: 1 },
            },
          },
          {
            $lookup: {
              from: "artists",
              localField: "artists",
              foreignField: "id",
              as: "artistInfo",
            },
          },
          {
            $project: {
              _id: 0,
              // Các trường khác bạn muốn giữ lại
              artistInfo: 1, // Giữ lại thông tin genres
              genresid: 1,
              id: 1,
              songname: 1,
              thumbnail: 1,
              alias: 1,
              artists: { $ifNull: ["$artistInfo", []] },
              like: 1,
              listen: 1,
              songLink: 1,
              duration: 1,
            },
          },
          {
            $sort: { createdAt: -1 },
          },
          {
            $limit: 12,
          },
        ]);
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
