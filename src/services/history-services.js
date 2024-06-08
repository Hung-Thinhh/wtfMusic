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
        ;
      } else {
        const newRanking = new SongRanking({
          songId: songRanking.songId,
          listenCount: 1,
          rankingDate: new Date()
        });
        await newRanking.save();
        ;
      }
    } else {
      const newRanking = new SongRanking({
        songId: data.id,
        listenCount: 1,
        rankingDate: new Date()
      });
      await newRanking.save();
      ;
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
  let PlaylistHistory = await History.findOne({ userId: idUser });
  if (PlaylistHistory) {
    console.log(PlaylistHistory)
    const playlistIds = PlaylistHistory.PlaylistHistory;
    const playlistInfoArray = [];
  
    // Lặp qua từng id playlist
    const promises = playlistIds.map((playlistId) => {
      // Tìm playlist dựa trên id
      return Playlist.findOne({ playlistId: playlistId })
        .then((playlist) => {
          // Nếu tìm thấy playlist, thêm thông tin vào mảng playlistInfoArray
          if (playlist) {
            console.log('jajaja',playlist);
            const playlistInfo = playlist;
            playlistInfoArray.push(playlistInfo);
          }
        })
        .catch((error) => {
          console.log("Error retrieving playlist:", error);
        });
    });
  
    // Đợi cho tất cả các yêu cầu tìm kiếm playlist hoàn thành trước khi xử lý kết quả
    try {
      const results = await Promise.all(promises);
      if (results.some(result => result instanceof Error)) {
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
          DT: playlistInfoArray,
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
