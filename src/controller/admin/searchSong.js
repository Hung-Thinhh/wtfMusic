const Song = require('../../models/sonng_model');
const Ar = require('../../models/artists_model');

const adminSS = async (req, res) => {
  const data = req.body.data;

  try {
    const songFields = "thumbnail songname id";
    const artistFields = "artistsName id avt";
    const songs = await Song.find({
      $or: [
        { songname: { $regex: data, $options: 'i' } },
        { artists: { $regex: data, $options: 'i' } }
      ]
    }).select(songFields);

    const artists = await Ar.find({
      $or: [
        { artistsName: { $regex: data, $options: 'i' } },
        { realName: { $regex: data, $options: 'i' } }
      ]
    }).select(artistFields);

    res.json({ songs, artists });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  adminSS
};