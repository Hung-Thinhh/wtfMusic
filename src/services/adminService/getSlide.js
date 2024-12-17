import Slide from "../../models/slide_model";

const getSlide = async () => {
    try {
        const slides = await Slide.aggregate([
            {
                $lookup: {
                    from: "playlists", // Updated to the correct collection name
                    localField: "playlistId",
                    foreignField: "playlistId",
                    as: "Playlist"
                }
            },
            {
                $project: {
                    "Playlist.thumbnail": 1,
                    "Playlist.playlistId": 1,
                    "Playlist.playlistname": 1,
                    // Include other fields from Slide if needed
                    slideId: 1,
                    slideName: 1,
                    slideImage: 1,
                    slideDescription: 1,
                    playlistId: 1
                }
            }
        ]);
        if (slides) {
            return {
                EM: "get thành công!",
                EC: "0",
                DT: slides,
            };
        } else {
            return {
                EM: "get thất bại!",
                EC: "-1",
                DT: "",
            };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const setSilde = async (id, data) => {
    try {
        const slide = await Slide.findById(id);
        if (slide) {
            await slide.updateOne(data);
            return {
                EM: "set thành công!",
                EC: "0",
                DT: slide,
            };
        } else {
            return {
                EM: "set thất bại!",
                EC: "-1",
                DT: "",
            };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const insertSilde = async (data) => {
    try {
        const slide = new Slide(data);
        if (slide) {
            await slide.save();
            return {
                EM: "insert thành công!",
                EC: "0",
                DT: slide,
            };
        } else {
            return {
                EM: "insert thất bại!",
                EC: "-1",
                DT: "",
            };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { getSlide, setSilde, insertSilde };

