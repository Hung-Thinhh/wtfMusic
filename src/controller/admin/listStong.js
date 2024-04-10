const Song = require('../../models/sonng_model');
const Genres = require('../../models/genre_model');

const adminSong = async (req, res) => {
    try {
        const songdata = await Song.find({}, {
            thumbnail: 1, 
            songname: 1, 
            genresid: 1,
            listen:1,
            artistsId:1,
            like:1,
            _id:0
        });

        const handledata = await Promise.all(songdata.map(async (song) => {
            
            const genresNames = await Promise.all(
                song.genresid.map(async (genresid) =>
                await Genres.findOne({genreId: genresid}, {genrename: 1, _id: 0})
            ));

            return {...song.toObject(), genresid: genresNames};
        }));

        res.json(handledata);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    adminSong
};