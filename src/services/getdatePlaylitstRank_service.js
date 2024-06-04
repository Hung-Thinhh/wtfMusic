import PlaylistRanking from "../models/playlistRanking_model";

const getPlaylistRank = async (id) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 to get only the date

    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10); // Subtract 10 days from today

    const playlistRanking = await PlaylistRanking.find({
        playlistId: id,
        rankingDate: {
            $gte: tenDaysAgo, // Retrieve records from ten days ago to today
            $lte: today,
        },
    });

    return {
        EM: "thêm vào lịch sử thành công!",
        EC: "0",
        DT: playlistRanking,
    };
};

module.exports = { getPlaylistRank };
