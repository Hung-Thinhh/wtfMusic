import History from "../models/history.js";
import Song from "../models/sonng_model.js";
import Playlist from "../models/playlist_model.js";
import SongRanking from "../models/songRanking_model";

const addHistory = async (idUser, data) => {
  let roles;
  if (data.type == "song") {
    await Song.findOneAndUpdate(
      { id: data.id },
      { $inc: { listen: 1 } },
      { upsert: true }
    );
    let songRanking = await SongRanking.findOne({ songId: data.id });
    if (songRanking) {
      if (songRanking.rankingDate.getDate() === new Date().getDate()) {
        songRanking.listenCount += 1;
        await songRanking.save();
      } else {
        const newRanking = new SongRanking({
          songId: songRanking.songId,
          listenCount: 1,
          rankingDate: new Date(),
        });
        await newRanking.save();
      }
    } else {
      const newRanking = new SongRanking({
        songId: data.id,
        listenCount: 1,
        rankingDate: new Date(),
      });
      await newRanking.save();
    }

    //   db.SongRanking.insertOne({
    //     rankingDate: new Date(),
    //     songId: data.id,
    //     listenCount: 1,
    //     likeCount: 10,
    //     rank: 1
    // });
    roles = await History.findOneAndUpdate(
      { userId: idUser },
      { $addToSet: { SongHistory: data.id } },
      { upsert: true }
    );
  } else {
    roles = await History.findOneAndUpdate(
      { userId: idUser },
      { $addToSet: { PlaylistHistory: data.id } },
      { upsert: true }
    );
  }

  if (roles) {
    return {
      EM: "thêm vào lịch sử thành công!",
      EC: "0",
      DT: "",
    };
  } else {
    return {
      EM: "thêm vào lịch sử thất bại!",
      EC: "1",
      DT: "",
    };
  }
};

const getMyHistory = async (idUser) => {
  let user = await History.findOne({ userId: idUser });
  if (user) {
    console.log(user);
    const playlistIds = user.PlaylistHistory;
    const songId = user.SongHistory;
    const playlistInfoArray = [];
    const songInfoArray = [];
    // Lặp qua từng id playlist
    const promises = playlistIds.map((playlistId) => {
      // Tìm playlist dựa trên id
      return Playlist.findOne({ playlistId: playlistId })
        .then((playlist) => {
          // Nếu tìm thấy playlist, thêm thông tin vào mảng playlistInfoArray
          if (playlist) {
            const playlistInfo = playlist;
            playlistInfoArray.push(playlistInfo);
          }
        })
        .catch((error) => {
          console.log("Error retrieving playlist:", error);
        });
    });
    let promiseSong = [];
    if (songId.length > 0 && songId[0]) {
      console.log("jajaja", songId);

      promiseSong = Promise.all(
        songId.map(async (id) => {
          try {
            const songItem = await Song.findOne({ id: id, state: { $ne: 1 } });
            if (songItem) {
              songInfoArray.push(songItem);
            }
          } catch (error) {
            console.log("Error retrieving playlist:", error);
          }
        })
      ).then(() => {
        const validSongs = songInfoArray.filter((song) => song); // Loại bỏ những giá trị null hoặc undefined

        // validSongs.sort((a, b) => {
        //   const totalListenCountA =
        //     songId.find((item) => item === a.id)?.totalListenCount || 9999;
        //   const totalListenCountB =
        //     songId.find((item) => item === b.id)?.totalListenCount || 9999;

        //   return totalListenCountB - totalListenCountA;
      // });
          validSongs.sort((a, b) => songId.indexOf(a.__v) - songId.indexOf(b.__v));
      });
    }

    // Đợi cho tất cả các yêu cầu tìm kiếm playlist hoàn thành trước khi xử lý kết quả
    try {
      const results = await Promise.all([...promises, promiseSong]);
      if (results.some((result) => result instanceof Error)) {
        console.log("Error retrieving playlist info:", results);
        return {
          EM: "thêm vào lịch sử thất bại!",
          EC: "1",
          DT: "",
        };
      } else {
        return {
          EM: "thêm vào lịch sử thành công!",
          EC: "0",
          DT: { playlist: playlistInfoArray, song: songInfoArray.reverse() },
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

module.exports = {
  addHistory,
  getMyHistory,
};
