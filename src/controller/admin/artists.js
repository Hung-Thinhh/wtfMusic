const Ar = require('../../models/artists_model');
const { v4: uuidv4 } = require("uuid");
const adminA = async (req, res) => {
  const { status, data } = req.body;
  try {
    switch (status) {
      case 'update':
        const updatedArtists = await Ar.findOneAndUpdate({ id: data.id }, data, { upsert: true });
        res.json(updatedArtists);
        break;
      case 'delete':
        const deletedArtists = await Ar.findOneAndDelete({ id: data });
        res.json(deletedArtists);
        break;
      case 'create':
        const newIDArtists = uuidv4().substring(0, 8).toUpperCase();
        const createdArtists = await Ar.create({ ...data, alias: data.artistsName, id: newIDArtists });
        console.log(createdArtists);
        res.json(createdArtists);
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
  adminA
};