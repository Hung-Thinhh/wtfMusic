import History from "../models/history.js";
import Playlist from "../models/playlist_model.js";

const addHistory = async (idUser, data) => {
  let roles;
  if (data.type == "song") {
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

  const playlistIds = PlaylistHistory.PlaylistHistory;
  const playlistInfoArray = [];

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
 
};

module.exports = {
  addHistory,
  getMyHistory,
};
