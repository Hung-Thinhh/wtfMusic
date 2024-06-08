import Genres from "../models/genre_model";
import Playlist from "../models/playlist_model";

const getGenres = async () => {
    try {
        const genres = await Genres.find({});
        if (genres.length > 0) {
            const format = await Promise.all(genres.map(async (genre) => {
                const playlistIds = await Promise.all(genre.playListId.map(async (p) => {
                    const playlists = await Playlist.findOne({ playlistId: p });
                    return playlists;
                }));
                genre.playListId = playlistIds;
                return genre;
            }));
            return {
                EM: "Lấy genres thành công!",
                EC: "0",
                DT: { genres: format }, // Sử dụng dữ liệu đã được cập nhật
            };
        } else {
            return {
                EM: "Không có genres!",
                EC: "1",
                DT: "",
            };
        }
    } catch (error) {
        // Handle error here
        console.error(error);
        return {
            EM: "Đã xảy ra lỗi khi lấy genres!",
            EC: "2",
            DT: "",
        };
    }
};

module.exports = { getGenres };
module.exports = { getGenres };
