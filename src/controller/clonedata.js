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
            console.log("Playlist updated successfully", newww,playlistData);
            res.json(newww)
        } else {
            // Playlist doesn't exist, insert the data
            // await Playlist.create(playlistData);
            
            // Insert the playlist data into MongoDB
            const newww = await Playlist.create(playlistData);
            console.log("New playlist inserted successfully", newww,playlistData);
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
    console.log("da duoc goi")
    const SongId = req.body.id
    try {
        const songDetailRes = await fetch(`http://localhost:6969/api/songdetail/${SongId}`);
        const songDetailResult = await songDetailRes.json();

        const songUrlRes = await fetch(`http://localhost:6969/api/songurl/${SongId}`);
        const songUrlResult = await songUrlRes.json();      

        const songLyricsRes = await fetch(`http://localhost:6969/api/songly/${SongId}`);
        const songLyricsResult = await songLyricsRes.json();

        const id = SongId;
        const genresid = songDetailResult.data.genreIds ? songDetailResult.data.genreIds.map((genre) => genre) : [];
        const like = songDetailResult.data?.like || 0;
        const listen = songDetailResult.data?.listen || 0;
        const artists = songDetailResult.data.artists ? songDetailResult.data.artists.map((artist) => artist.id) : [];
        const alias = songDetailResult.data?.alias || "Unknown Artist";
        const duration = songDetailResult.data?.duration || "Unknown Artist";
        const songname = songDetailResult.data && songDetailResult.data.title ? songDetailResult.data.title : "Untitled Song";
        const thumbnail =
            songDetailResult.data?.thumbnailM ||
            "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg";

        const songLink =
            songUrlResult.data?.[128] ||
            "https://a128-z3.zmdcdn.me/c2e3abd902697240cf99ffb93e9e38f3?authen=exp=1712376116~acl=/c2e3abd902697240cf99ffb93e9e38f3/*~hmac=d9866bb2a2216c3ce17a63244b18dde1";
        const Ly = songLyricsResult.data.sentences ? songLyricsResult.data.sentences : null;


        const existingSong = await Song.findOne({ id: SongId });

        if (existingSong) {
        
            const updatedSong = await Song.findOneAndUpdate(
                { id: SongId },
                {
                    $set: {
                        thumbnail,
                        songname,
                        artists,
                        alias,
                        songLink,
                        listen,
                        like,
                        duration,
                        lyric: Ly,
                        genresid
                    }
                },
                { new: true }
            );

            res.json(updatedSong);
        } else {
            const newSong = await Song.create({
                id: SongId,
                thumbnail,
                songname,
                artists,
                alias,
                songLink,
                listen,
                like,
                duration,
                lyric: Ly,
                genresid
            });

            // Trả về dữ liệu bài hát mới tạo
            res.json(newSong);
        }
    } catch (err) {
        console.error("Error fetching playlist data", err);
        throw (err);
    }
};

const fetchAutoCloneGenre = async (req, res) => {
    try {
        const songId= await Playlist.find({},{songid:1})
        res.json({songId:songId})
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