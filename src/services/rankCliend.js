import SongRanking from "../models/songRanking_model";
import Song from "../models/sonng_model";

const getPlaylistRankMonth = async () => {
  const dateToday = new Date(); // Ngày hiện tại
  const firstDayOfMonth = new Date(
    dateToday.getFullYear(),
    dateToday.getMonth(),
    1
  ); // Ngày đầu tiên của tháng
  let item = [];
  // Tìm ngày gần nhất trước ngày đầu tiên của tháng mà có dữ liệu
  let closestDateWithData = await SongRanking.findOne({
    rankingDate: { $gte: firstDayOfMonth },
  })
    .sort({ rankingDate: -1 })
    .limit(1);
  let songRankings = [];
  // console.log(closestDateWithData);
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
        $sort: { totalListenCount: -1, "_id.songId": 1 }, // Sắp xếp theo lượt nghe giảm dần
      },
      {
        $limit: 10, // Giới hạn kết quả trả về 10 bản ghi
      },
    ]);

    if (songRankings) {
      const promiseSong = Promise.all(
        songRankings.map(async (id) => {
          try {
            const songItem = await Song.findOne({
              id: id._id.songId,
              state: { $ne: 1 },
            });
            if (songItem) {
              item.push(songItem);
            }
          } catch (error) {
            console.log("Error retrieving playlist:", error);
          }
        })
      )
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
          item.sort((a, b) => {
            const totalListenCountA = songRankings.find(item => item._id.songId === a.id)?.totalListenCount || 9999;
            const totalListenCountB = songRankings.find(item => item._id.songId === b.id)?.totalListenCount || 9999;
          
            return totalListenCountB - totalListenCountA;
          });
          return {
            EM: "thêm vào lịch sử thành công!",
            EC: "0",
            DT: { items: item },
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
const getPlaylistRankWeek = async (title) => {
  let genres = "";
  if (title == "vn") {
    genres = "IWZ9Z087";
  } else if (title == "us-uk") {
    genres = "IWZ9Z086";
  } else {
    genres = "IWZ9Z08U";
  }
  const dateToday = new Date(); // Ngày hiện tại
  const firstDayOfWeek = new Date(dateToday);
  const dayOfWeek = firstDayOfWeek.getDay();
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - dayOfWeek);
  let item = [];
  // Tìm ngày gần nhất trước ngày đầu tiên của tháng mà có dữ liệu
  let closestDateWithData = await SongRanking.findOne({
    rankingDate: { $gte: firstDayOfWeek },
  })
    .sort({ rankingDate: -1 })
    .limit(1);
  let songRankings = [];
  // console.log(firstDayOfWeek);
  if (!closestDateWithData) {
    // console.log("lõiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - dayOfWeek - 7);
    closestDateWithData = await SongRanking.findOne({
      rankingDate: { $gte: firstDayOfWeek },
    })
      .sort({ rankingDate: -1 })
      .limit(1);
  }
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
      $sort: {
        totalListenCount: -1,
        "_id.songId": 1,
      }, // Sắp xếp theo lượt nghe giảm dần
    },
    // {
    //   $limit: 10, // Giới hạn kết quả trả về 10 bản ghi
    // },
  ]);

  if (songRankings) {
    console.log(songRankings);
    const promiseSong = Promise.all(
      songRankings.map(async (id) => {
        try {
          const songItem = await Song.findOne({
            id: id._id.songId,
            $and: [
              { state: { $ne: 1 } },
              { genresid: { $in: [genres] } },
              // Thêm điều kiện mới tại đây nếu cần
            ],
          });
          if (songItem) {
            item.push(songItem);
            
          }
        } catch (error) {
          console.log("Error retrieving playlist:", error);
        }
      }
      
      )
    );
   
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
        item.sort((a, b) => {
          const totalListenCountA = songRankings.find(item => item._id.songId === a.id)?.totalListenCount || 9999;
          const totalListenCountB = songRankings.find(item => item._id.songId === b.id)?.totalListenCount || 9999;
        
          return totalListenCountB - totalListenCountA;
        });
        return {
          EM: "thêm vào lịch sử thành công!",
          EC: "0",
          DT: { items: item },
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
};

module.exports = { getPlaylistRankMonth, getPlaylistRankWeek };
