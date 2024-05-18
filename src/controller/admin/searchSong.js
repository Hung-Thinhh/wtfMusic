const Song = require('../../models/sonng_model');
const Ar = require('../../models/artists_model');

const adminSS = async (req, res) => {
  const data = req.body.data;

  try {
    const songs = await Song.find({
      $or: [
        { songname: { $regex: data, $options: 'i' } },
        { artists: { $regex: data, $options: 'i' } }
      ]
    });

    res.json(songs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  adminSS
};