const playList = require('../models/playlist_model');
const { v4: uuidv4 } = require('uuid');
const addToPlayList = async (req, res) => {
    try {
        const id = uuidv4().substring(0, 8).toUpperCase();

        const playListData = req.body.data;
        const final = {
            id,
            ...playListData
        }
        console.log("playListỬ",final)
        // const newplayList = new playList(playListData);
        // const savedplayList = await newplayList.save();

        res.json(playListData);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    addToPlayList
};