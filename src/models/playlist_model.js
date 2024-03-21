const mongoose = require('mongoose');
const { Schema } = mongoose;

const playlistSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    playlistname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    genresid: {
        type: Array,
        required: true,
        trim: true,
        index: true
    },
    artistsId: {
        type: Array,
        required: true,
        trim: true,
        index: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    desciption: {
        type: String,
        required: true,
        trim: true,
    },
    songid: {
        type: Array,
        required: true,
        trim: true,
        index: true
    },
    like: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    listen: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;