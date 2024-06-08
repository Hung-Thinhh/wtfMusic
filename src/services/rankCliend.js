import SongRanking from "../models/songRanking_model";
import Song from "../models/sonng_model";

const getPlaylistRankMonth = async () => {
  const dateToday = new Date(); // Ngày hiện tại
  const firstDayOfMonth = new Date(
    dateToday.getFullYear(),
    dateToday.getMonth(),
    1
  ); // Ngày đầu tiên của tháng
let item = []
  // Tìm ngày gần nhất trước ngày đầu tiên của tháng mà có dữ liệu
  const closestDateWithData = await SongRanking.findOne({
    rankingDate: { $gt: firstDayOfMonth },
  })
    .sort({ rankingDate: -1 })
    .limit(1);
  let songRankings = [];
  console.log(closestDateWithData);
  if (closestDateWithData) {
    songRankings = await SongRanking.aggregate([
      {
        $match: {
          $or: [
            {
              rankingDate: {
                $gte: closestDateWithData.rankingDate,
                $lte: dateToday,
              },
            },
            { rankingDate: { $lt: closestDateWithData.rankingDate } },
          ],
        },
      },
      {
        $group: {
          _id: { songId: "$songId" },
          totalListenCount: { $sum: "$listenCount" },
        },
      },
      {
        $sort: { totalListenCount: -1 }, // Sắp xếp theo lượt nghe giảm dần
      },
      {
        $limit: 10, // Giới hạn kết quả trả về 10 bản ghi
      },
    ]);
      
      if (songRankings) {
        const promiseSong = Promise.all(
            songRankings.map(async (id) => {
              try {
                const songItem = await Song.findOne({ id: id._id.songId, state: { $ne: 1 } });
                if (songItem) {
                  item.push(songItem);
                }
              } catch (error) {
                console.log("Error retrieving playlist:", error);
              }
            })
          ).then(() => {
            item.sort((a, b) => {
                return songRankings.findIndex(item => item._id.songId === a._id.songId) - songRankings.findIndex(item => item._id.songId === b._id.songId);
            });
          });
          try {
            const results = await Promise.all([promiseSong]);
      
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
                DT: {  song: item },
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
    }
    // Xử lý kết quả của truy vấn ở đây
  } else {
    console.log("lõiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  }

  return {
    EM: "thêm vào lịch sử thành công!",
    EC: "0",
    DT: songRankings,
  };
};

module.exports = { getPlaylistRankMonth };
