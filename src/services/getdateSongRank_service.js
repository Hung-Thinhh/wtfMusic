import SongRanking from "../models/songRanking_model";

const getSongRank = async (id) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 to get only the date

    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 5); // Subtract 10 days from today

    const songRankings = await SongRanking.find({
        songId: id,
        rankingDate: {
            $gte: tenDaysAgo, // Retrieve records from ten days ago to today
            $lte: today,
        },
    });

    return {
        EM: "thêm vào lịch sử thành công!",
        EC: "0",
        DT: songRankings,
    };
};

module.exports = { getSongRank };
