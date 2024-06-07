const Song = require('../models/sonng_model');
const Playlist = require('../models/playlist_model');
const Ar = require('../models/artists_model');
const genre = require('../models/genre_model')
const moment = require('moment');
const { Nuxtify } = require("nuxtify-api");
const fetchclone = async (_, res) => {
    try {
        const allPlaylist = await Playlist.find({}, { songid: 1, _id: 0 });
        const getSong = await Promise.all(allPlaylist.map(async (datapl) => {
            const songDetails = await Promise.all(datapl.songid.map(async (id) => {
                try {
                    const response = await Nuxtify.song.getDetail(id);
                    if (response && response.data) {
                        const song = response.data;
                        const ar = await Nuxtify.getArtist(song.artists[0].alias);
                        const jj = {
                            id: ar.data.id,
                            artistsName: ar.data.name,
                            alias: ar.data.alias,
                            biography: ar.data.biography ? ar.data.biography : 'nô tiểu sử',
                            avt: ar.data.thumbnailM,
                            birthday: ar.data.birthday ? ar.data.birthday : '02/05/2024',
                            realName: ar.data.realname ? ar.data.realname : 'nô tên thật',
                            totalFollow: ar.data.totalFollow,
                            songListId: [id],
                            playListId: ar.data.playlistId ? [ar.data.playlistId] : ["6B7W7EU8"],
                            state: 0,
                        };
                        return jj;
                    }
                    return null; // Trả về null nếu không có dữ liệu response
                } catch (error) {
                    console.log(`Error fetching song detail for id ${id}:`, error);
                    return null;
                }
            }));
            return songDetails.filter(song => song !== null); // Loại bỏ các bản ghi null
        }));

    const fuck = await Promise.all(getSong.map(async (data) => {
        await Ar.insertMany(data.flat());
    }));
        res.json(fuck);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const fetchplaylistclone = async (req, res) => {
    try {
        const id = req.body.data.playlistId;
        const playlistData = req.body.data;

        const existingPlaylist = await Playlist.findOne({ playlistId: id });
        if (existingPlaylist) {
            // Playlist already exists, update the data
            // await Playlist.findOneAndUpdate({ playlistId: id }, playlistData, { upsert: true });

            // Update the playlist data in MongoDB
            const newww = await Playlist.updateOne({ playlistId: id }, playlistData);
            console.log("Playlist updated successfully");
            res.json(newww)
        } else {
            // Playlist doesn't exist, insert the data
            // await Playlist.create(playlistData);

            // Insert the playlist data into MongoDB
            const newww = await Playlist.create(playlistData);
            console.log("New playlist inserted successfully");
            res.json(newww)
        }

    } catch (err) {
        console.log(err);
        // res.status(500).json({ error: "Something went wrong" });
    }
};

const fetchArtistsClone = async (req, res) => {
    try {
        const id = req.body.data.id;
        console.log(id)
        const artistsData = req.body.data;
        const updatedartists = await Ar.findOneAndUpdate({ id: id }, artistsData, { upsert: true });
        res.json(updatedartists);
    } catch (err) {
        console.log("Artists Clone ERROR", err);
    }
};


const fetchSongData = async (req, res) => {
    const SongId = req.body.id;
    try {
        const detail = await Nuxtify.song.getDetail(SongId);
        if (Array.isArray(detail.data.artists) && detail.data) {
            const artistIds = Array.isArray(detail.data.artists) ? detail.data.artists.map(artist => artist.alias) : [];
            const artists = await Promise.all(artistIds.map(alias => Nuxtify.getArtist(alias)));

            const result = await Promise.all(artists.map(async ar => {
                const sections = ar.data.sections;
                const songListIds = sections.flatMap(section => section.items ? section.items.map(item => item.encodeId ? item.encodeId : null) : []);
                const filteredSongListIds = await Song.find({ id: { $in: songListIds } }, { id: 1, _id: 0 }).distinct('id');
            
                return {
                    id: ar.data.id,
                    artistsName: ar.data.name,
                    alias: ar.data.alias,
                    biography: ar.data.biography,
                    avt: ar.data.thumbnail,
                    birthday: ar.data.birthday,
                    realName: ar.data.realname,
                    totalFollow: ar.data.totalFollow,
                    songListId: filteredSongListIds,
                    playListId: [ar.data.playlistId],
                };
            }));
            console.log('================================', result[0].alias);
            res.json(result);
        }
        else { res.json({}) }
    } catch (err) {
        console.error("Error fetching playlist data", err);
        throw err;
    }
};
const fetchAutoCloneGenre = async (req, res) => {
    try {
        const songId = await Song.find({}, { id: 1, _id: 0 });
        console.log(songId.length)
        const nsew = songId.map((data) => data.id);
        res.json({ songId: nsew });
    } catch (err) {
        console.error("Artists Clone ERROR", err);
    }
};

module.exports = {
    fetchclone,
    fetchplaylistclone,
    fetchArtistsClone,
    fetchAutoCloneGenre,
    fetchSongData
};