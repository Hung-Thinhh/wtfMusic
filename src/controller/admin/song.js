const Song = require('../../models/sonng_model');
const { v4: uuidv4 } = require("uuid");
const adminS = async (req, res) => {
  const { status, data } = req.body;
  console.log(status, data);
  try {
    switch (status) {
      case 'update':
        const updatedSong = await Song.findOneAndUpdate({ id: data.id }, data, { upsert: true });
        res.json(updatedSong);
        break;
      case 'delete':
        const deletedSong = await Song.findOneAndDelete({ id: data });
        res.json(deletedSong);
        break;
      case 'create':
        const newIDSong = uuidv4().substring(0, 8).toUpperCase();
        data.lyric = JSON.parse(data.lyric);
        const createdSong = await Song.create({ ...data, alias: data.songname, id: newIDSong });
        console.log(createdSong);
        res.json(createdSong);
        break;
      default:
        res.status(400).json({ error: 'Invalid status' });
        break;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  adminS
};