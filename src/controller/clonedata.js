const Song = require('../models/sonng_model');
const Playlist = require('../models/playlist_model');
const Ar = require('../models/artists_model');
const genre = require('../models/genre_model')

const { Nuxtify } = require("nuxtify-api");
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
        const id = req.body.data.id;
        const songData = req.body.data;
        const updatedPlaylist = await Playlist.findOneAndUpdate({ playlistId: id }, songData, { upsert: true });
        res.json(updatedPlaylist);
    } catch (err) {
        console.log(err);
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
const fetchPlaylistData = async (playlistId) => {
    try {
        const response = await fetch(`http://localhost:6969/api/getplaylist/${playlistId}`);
        const data = await response.json();

        const playlistData = {
            playlistId: data.data.encodeId,
            playlistname: data.data.title,
            genresid: data.data.genres.map(genres => genres.id),
            artistsId: data.data.artists.map(artists => artists.id),
            thumbnail: data.data.thumbnailM,
            desciption: data.data.description,
            songid: data.data.song.items.map(song => song.encodeId),
            like: data.data.like,
            listen: data.data.listen
        };

        return playlistData;
    } catch (err) {
        console.error("Error fetching playlist data", err);
        return {};
    }
};

const fetchAutoCloneGenre = async (req, res) => {
    try {
        const rootData = await Nuxtify.getGenres();
        const datahandler = rootData.genre.map((data) => ({
            genreId: data.encodeId,
            genrename: data.title,
            thumbnail: data.thumbnail,
            playListId: data.playlists.map((playlist) => playlist.encodeId),
            listen: 0
        }));

        for (let data of datahandler) {
            await genre.findOneAndUpdate({ genreId: data.genreId }, data, { upsert: true });

            for (let playlistId of data.playListId) {
                const playlistData = await fetchPlaylistData(playlistId); // Gọi API để lấy thông tin playlist

                // Lưu thông tin playlist vào model Playlist
                await fetchplaylistclone({ body: { data: playlistData } });
            }
        }

        res.json({ message: `Updated ${datahandler.length} items successfully!`, data: datahandler });
    } catch (err) {
        console.error("Artists Clone ERROR", err);
    }
};
module.exports = {
    fetchclone,
    fetchplaylistclone,
    fetchArtistsClone,
    fetchAutoCloneGenre
};