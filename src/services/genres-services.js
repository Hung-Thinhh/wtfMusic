import Genres from "../models/genre_model";

const getGenres = async () => {
    const genres = await Genres.find({}); // Sử dụng hàm find để lấy tất cả genres
    if (genres.length > 0) {
        // Kiểm tra nếu có ít nhất một genre
        try {
            return {
                EM: "Lấy genres thành công!",
                EC: "0",
                DT: { genres },
            };
        } catch (error) {
            console.log("Error retrieving genres info:", error);
            return {
                EM: "Lấy genres thất bại!",
                EC: "1",
                DT: "",
            };
        }
    } else {
        return {
            EM: "Không có genres!",
            EC: "1",
            DT: "",
        };
    }
};

module.exports = { getGenres };
