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
        const id = req.body.data.playlistId;
        const playlistData = req.body.data;

        const existingPlaylist = await Playlist.findOne({ playlistId: id });
        if (existingPlaylist) {
            // Playlist already exists, update the data
            // await Playlist.findOneAndUpdate({ playlistId: id }, playlistData, { upsert: true });
           const f= playlistData.songid.map(async (id)=>await fetchSongData(id))
            console.log("Playlist updated successfully",f);
        } else {
            // Playlist doesn't exist, insert the data
            // await Playlist.create(playlistData);
          const f=  playlistData.songid.map(async (id)=>await fetchSongData(id))
            console.log("New playlist inserted successfully",f);
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
            description: data.data.description,
            songid: data.data.song.items ? data.data.song.items.map(song => song.encodeId) : [data.data.encodeId],
            like: data.data.like,
            listen: data.data.listen
        };
        console.log(playlistData.songid.map(song =>{
            fetchSongData(song)
        }));
        return playlistData;
    } catch (err) {
        console.error("Error fetching playlist data", err);
        return {};
    }
};
const fetchSongData = async (SongId) => {
    try {
        const songDetailRes = await fetch(`http://localhost:6969/api/songdetail/${SongId}`);
        const songDetailResult = await songDetailRes.json(); // Convert to JS object

        const songUrlRes = await fetch(`http://localhost:6969/api/songurl/${SongId}`);
        const songUrlResult = await songUrlRes.json(); // Convert to JS object      

        const songLyricsRes = await fetch(`http://localhost:6969/api/songly/${SongId}`);
        const songLyricsResult = await songLyricsRes.json(); // Convert to JS object

        const id = SongId;
        const genres = songDetailResult.data.genres.map((genre) => 
        genre.id
        );
        const like = songDetailResult.data.like;
        const listen = songDetailResult.data.listen;
        const artistInfo = songDetailResult.data.artists.map((artist) => 
           artist.id,
        );
        const alias = songDetailResult.data?.alias || "Unknown Artist";
        const duration = songDetailResult.data?.duration || "Unknown Artist";

        const songname = songDetailResult.data?.title || "Untitled Song";
        const thumbnail =
            songDetailResult.data?.thumbnailM ||
            "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg";

        const songLink =
            songUrlResult.data?.[128] ||
            "https://a128-z3.zmdcdn.me/c2e3abd902697240cf99ffb93e9e38f3?authen=exp=1712376116~acl=/c2e3abd902697240cf99ffb93e9e38f3/*~hmac=d9866bb2a2216c3ce17a63244b18dde1";
        const Ly = songLyricsResult.data.sentences;
        return {
            id,
            thumbnail,
            songname,
            artistInfo,
            alias,
            songLink,
            listen,
            like,
            duration,
            lyricsString: Ly,
            genres
        };
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