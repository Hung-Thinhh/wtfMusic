import User from "../models/user_model.js";
import Playlist from "../models/playlist_model.js";

const upDateToPlaylist = async (req, res) => {
    try {
        const data = req.body.data;
        const curUser = await User.findOne({ username: data.userId });
        const playlist = await Playlist.findOne({ playlistId: data.playlistId });

        if (!curUser || !curUser.myPlayLists || curUser.myPlayLists.indexOf(playlist.playlistId) === -1) {
            return res.json({ err: "playlist invalid" });
        } else {
            const updatePromises = data.songId.map(async (songId) => {
                return playlist.updateOne({ $addToSet: { songid: songId } });
            });

            await Promise.all(updatePromises);
            return res.status(200).send({ error:null, data: 1});
        }
    } catch (err) {
        return res.status(200).send({ error: err.message });
    }
}

export default upDateToPlaylist;