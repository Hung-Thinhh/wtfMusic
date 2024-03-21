const Song = require('../models/sonng_model');
const Playlist = require('../models/playlist_model');


const fetchclone = async (req, res) => {
    try{
        const id = req.body.data.id;
        const songData = req.body.data;
        const updatedSong = await Song.findOneAndUpdate({ id: id }, songData, { upsert: true });
        res.json(updatedSong);
    }catch(err){
        console.log(err);
    }
};
const fetchplaylistclone = async (req, res) => {
    try{
        const id = req.body.data.id;
        const songData = req.body.data;
        const updatedPlaylist = await Playlist.findOneAndUpdate({ id: id }, songData, { upsert: true });
        console.log(updatedPlaylist)
        res.json(updatedPlaylist);
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    fetchclone,
    fetchplaylistclone
};