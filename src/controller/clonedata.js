const Song = require('../models/sonng_model');
const Playlist = require('../models/playlist_model');
const Ar = require('../models/artists_model');



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
        const updatedPlaylist = await Playlist.findOneAndUpdate({ playlistId: id }, songData, { upsert: true });
        res.json(updatedPlaylist);
    }catch(err){
        console.log(err);
    }
};

const fetchArtistsClone = async (req, res) => {
    try{
        const id = req.body.data.id;
        const artistsData = req.body.data;
        const updatedartists = await Ar.findOneAndUpdate({ id: id }, artistsData, { upsert: true });
        res.json(updatedartists);
    }catch(err){
        console.log("Artists Clone ERROR",err);
    }
};
module.exports = {
    fetchclone,
    fetchplaylistclone,
    fetchArtistsClone
};