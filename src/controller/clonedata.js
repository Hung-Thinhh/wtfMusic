const Song = require('../models/sonng_model');
const Playlist = require('../models/playlist_model');
const Ar = require('../models/artists_model');
const genre = require('../models/genre_model')

const { Nuxtify } = require("nuxtify-api");
const { response } = require('express');
const fetchclone = async (req, res) => {
    try {
        const id = req.body.data.id;
        const songData = req.body.data;
        const updatedSong = await Song.findOneAndUpdate({ id: id }, songData, { upsert: true });
        res.json(updatedSong);
    } catch (err) {
        console.log(err);
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
        const ars = await Promise.all(detail.data.artists.map(async artist => await Nuxtify.getArtist(artist.alias)));
        const result = ars.map((ar) => {
            console.log({ id: ar.data.id,
                artistsName: ar.data.name,
                alias: ar.data.alias,
                biography: ar.data.biography,
                avt: ar.data.thumbnail,
                birthday: ar.data.birthday,
                realName: ar.data.realname,
                totalFollow: ar.data.totalFollow,
                songListId: [],
                playListId: [ar.data.playlistId],})
            return { id: ar.data.id,
            artistsName: ar.data.name,
            alias: ar.data.alias,
            biography: ar.data.biography,
            avt: ar.data.thumbnail,
            birthday: ar.data.birthday,
            realName: ar.data.realname,
            totalFollow: ar.data.totalFollow,
            songListId: [],
            playListId: [ar.data.playlistId],}
        });
        console.log(result);
    } catch (err) {
        console.error("Error fetching playlist data", err);
        throw err;
    }
};
const fetchAutoCloneGenre = async (req, res) => {
    try {
        const songId = await Song.find({}, { id: 1, _id: 0 });
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