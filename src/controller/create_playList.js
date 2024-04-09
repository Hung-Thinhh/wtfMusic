const playList = require('../models/playlist_model');
import User from "../models/user_model.js";
const { v4: uuidv4 } = require('uuid');
const addToPlayList = async (req, res) => {
    try {
        const playListData = req.body.data;

        if (playListData) {
            const user = await User.findOne({
                $or: [{ username: playListData.artistsId }],
            });
            
            if (!user) {
                return res.status(404).send({error: 'User not found'});
            }

            let playlist = await playList.findOne({ artistsId: user.id });

            // Nếu playlist đã tồn tại, giữ nguyên playlistId
            if (playlist) {
                const updatedPlaylist = await playList.findOneAndUpdate({ artistsId: user.id }, {
                    $addToSet: { songid: playListData.songid[0] },
                    $set: {
                        playlistname: playListData.artistsId,
                        genresid: [],
                        thumbnail: playListData.thumbnail,
                        description: playListData.description,
                        like: playListData.like,
                        listen: playListData.listen,
                    },
                }, { new: true });

                console.log(updatedPlaylist);
                return res.json(updatedPlaylist);
            }
        
            // Nếu playlist chưa tồn tại, tạo mới playlist với playlistId
            const id = uuidv4().substring(0, 8).toUpperCase();
            const newPlaylist = new playList({
                playlistId: id,
                artistsId: user.id,
                playlistname: playListData.artistsId,
                songid: playListData.songid,
                genresid: [],
                thumbnail: playListData.thumbnail,
                description: playListData.description,
                like: playListData.like,
                listen: playListData.listen,
            });

            const createdPlaylist = await newPlaylist.save();
            console.log(createdPlaylist);
            return res.json(createdPlaylist);
        }

    } catch (err) {
        return res.status(500).send({error: err.message});
    }
}

module.exports = {
    addToPlayList
};