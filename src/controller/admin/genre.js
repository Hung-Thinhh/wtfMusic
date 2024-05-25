const genre = require('../../models/genre_model');
const { v4: uuidv4 } = require("uuid");
const adminG = async (req, res) => {
  const { status, data } = req.body;
  console.log(status, data);
  try {
    switch (status) {
      case 'update':
        const updatedSong = await genre.findOneAndUpdate({ genreId: data.id }, data, { upsert: true });
        res.json(updatedSong);
        break;
      case 'delete':
        const deletedSong = await genre.findOneAndDelete({ genreId: data });
        res.json(deletedSong);
        break;
      case 'create':
        const newIDSong = uuidv4().substring(0, 8).toUpperCase();
        const createdSong = await genre.create({ ...data , genreId: newIDSong });
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
  adminG
};