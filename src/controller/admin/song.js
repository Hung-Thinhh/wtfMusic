const Song = require('../../models/sonng_model');

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
        // const createdSong = await Song.create(data);
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