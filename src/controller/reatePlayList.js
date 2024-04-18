import User from "../models/user_model.js";
import Playlist from "../models/playlist_model.js"; //import model Playlist
const { v4: uuidv4 } = require('uuid');

const createPlaylist = async (req, res) => {
    try {
        const playListData = req.body.data;
        const getUser = await User.findOne({ username: playListData.user });

        if (getUser) {
            const newPlaylistID = uuidv4().substring(0, 8).toUpperCase();

            //Tạo playlist mới với các thông tin tương ứng
            const createdPlaylist = new Playlist({
                playlistId: newPlaylistID,
                playlistname: playListData.playlistname,
                genresid: [],
                artistsId: [playListData.user],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/f/f3af71df0b7a68ec44955faa5dc7d0ce.jpg",
                description: "/",
                songid: [],
                like: 0,
                listen: 0,
                type:"user"
            })


            // Lưu playlist
            const data1 = await createdPlaylist.save();


            //Thêm playlistId vào mảng playlistId của user
            getUser.myPlayLists.push(newPlaylistID);
            const data2 = await getUser.save();

            console.log('Thêm playlist vào myPlaylists:', data2, data1);
            return res.status(200).send({ playlistId: data2, message: data1 })
        } else {
            return res.status(200).send({ error: 'User not found' });
        }
    } catch (err) {
        return res.status(200).send({ error: err.message });
    }
}

export default createPlaylist;