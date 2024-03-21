const { Nuxtify } = require("nuxtify-api")

const fetchPlaylist = async (req, res) => {
    const id = req.params.id;
    try {
        const songly = await Nuxtify.getPlaylist(id);
        return res.json(songly);
    } catch (error) {
        res.status(500).send(`Failed to get playlist: ${error.message}`);
    }
}


module.exports = {
    fetchPlaylist,
};