const { Nuxtify } = require("nuxtify-api");
const Ar = require("../models/artists_model");
const Song = require("../models/sonng_model");
const Playlist = require("../models/playlist_model");
const getArtist = async (req, res) => {
    // id là alias 
    const artistId = req.params.id;
    await Ar.findOne({ alias: artistId }).then(async (data) => {
        if (data) {
            const songListId = data.songListId;
            const playListId = data.playListId;
            
            // console.log(songListId);

            for (let i = 0; i < songListId.length; i++) {
                const song = await Song.findOne({ id: songListId[i] }).select("songname thumbnail id artists duration");
                if (song) {
                    data.songListId[i] = song;
                }
            }
            for (let i = 0; i < playListId.length; i++) {
                const playlist = await Playlist.findOne({ playlistId: playListId[i] }).select("playlistname thumbnail playlistId");
                if (playlist) {
                    data.playListId[i] = playlist;
                }
            }
            // await Playlist.updateMany(
            //     { type: 'palylist' }, // Tìm kiếm các playlist có type bằng 'palylist'
            //     { $set: { type: 'playlist' } } // Cập nhật type thành 'playlist'
            // );
            const playlists = await Playlist.find(
                {
                    artistsId: { $in: ['IW6ZZ690'] },
                    type: 'playlist'
                }
            ).select("playlistname thumbnail playlistId");
            // Tạo bản sao của data
        const newData = JSON.parse(JSON.stringify(data));

        // Thêm trường mới vào bản sao
        newData.playlistJoin = playlists;

        console.log(newData); // Kiểm tra kết quả

        return res.json(newData);
        } else {
            const getSongmp3 = async () => {
                const songly = await Nuxtify.getArtist(artistId);
                return res.json(songly.data);
            };
            getSongmp3();
        }
    });
};
export {getArtist}
