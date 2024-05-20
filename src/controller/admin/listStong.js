const Song = require('../../models/sonng_model');
const Genres = require('../../models/genre_model');
const Ar = require('../../models/artists_model');

const adminSong = async (req, res) => {
    const limit = req.params.id;
    try {
        // Xóa dữ liệu trùng lặp trước khi truy vấn
        const query = [
            { $group: { _id: { songname: '$songname', thumbnail: '$thumbnail',id:'$id' }, count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } },
        ];
        const duplicateSongs = await Song.aggregate(query);
        const deletePromises = duplicateSongs.map(async (song) => {
            const { songname, thumbnail } = song._id;
            await Song.deleteMany({ songname, thumbnail });
        });
        const p = await Promise.all(deletePromises);
        console.log(p);
        // Truy vấn dữ liệu bài hát sau khi xóa trùng lặp
        const songCount = await Song.countDocuments({});
        const songdata = await Song.find({}, {
            thumbnail: 1,
            songname: 1,
            genresid: 1,
            listen: 1,
            artists: 1,
            like: 1,
            alias: 1,
            id: 1,
            createdAt: 1,
            _id: 0
        }).sort({ _id: -1 }).skip(+limit).limit(10);

        const handledata = await Promise.all(songdata.map(async (song) => {
            const genresNames = await Promise.all(
                song.genresid.map(async (genresid) =>
                    await Genres.findOne({ genreId: genresid }, { genrename: 1, _id: 0 })
                ));
            const artistsNames = await Promise.all(
                song.artists.map(async (artistsid) =>
                    await Ar.findOne({ id: artistsid }, { artistsName: 1, _id: 0 })
                ));

            return { ...song.toObject(), genresid: genresNames, artists: artistsNames };
        }));

        const responseData = { handledata, maxPage: songCount };
        res.json(responseData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    adminSong
};