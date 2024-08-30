import User from "../../models/user_model.js";
import Song from "../../models/sonng_model.js";
import Playlist from "../../models/playlist_model.js";
import genre from "../../models/genre_model.js";
import Ar from "../../models/artists_model.js";


const getSongEditPage = async (id) => {
    try {

        const song = await Song.findOne({ id: id });
        if (song) {
            const format = {
                id: song.id,
                songname: song.songname,
                artist: song.artists,
                genre:song.genre,
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