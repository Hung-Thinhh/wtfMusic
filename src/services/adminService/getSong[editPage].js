import Song from "../../models/sonng_model.js";
import genre from "../../models/genre_model.js";
import Ar from "../../models/artists_model.js";


const getSongEditPage = async (id) => {
    try {
        const song = await Song.findOne({ id: id });
        if (song) {
            const format = {
                id: song.id,
                songname: song.songname,
                artist: await Ar.find({ artistId: { $in: song.artists } }) ? await Ar.find({ id: { $in: song.artists } }) : "",
                genre: await genre.find({ genreId: { $in: song.genre } }) ? await genre.find({ genreId: { $in: song.genre } }) : "",
                lyric: song.lyric,
                link: song.link,
                thumbnail: song.thumbnail,
                view: song.view,
                like: song.like,
                dislike: song.dislike,
                createdAt: song.createdAt
            };
            return {
                EM: "Lấy danh thể tìm kiếm thành công!",
                EC: "0",
                DT: {
                    songs: format,
                },
            };
        } else {
            return {
                EM: "Không lấy tìm được!",
                EC: "-1",
                DT: "",
            };
        }
        
    } catch (err) {
    console.log(err);
    return {
        EM: "Không lấy tìm được!",
        EC: "-1",
        DT: "",
    };
}
};



module.exports = {
    getSongEditPage
};