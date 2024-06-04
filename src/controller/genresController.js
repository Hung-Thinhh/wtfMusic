import { getGenres } from "../services/genres-services";

const fetchGenres = async (_, res) => {
    try {
        const data = await getGenres(); // Gọi hàm getGenres mà không cần id
        return res.status(200).json(data); // Trả về data nhận được từ hàm getGenres
    } catch (error) {
        res.status(500).send(`Failed to get genres: ${error.message}`); // Chỉnh lại mã lỗi thành 500 vì điều này liên quan đến lỗi server
    }
};

module.exports = {
    fetchGenres,
};
