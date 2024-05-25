const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  songname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  artists: {
    type: Array,
    required: true,
    trim: true,
    index: true,
  },
  genresid: {
    type: Array,
    required: true,
    trim: true,
    index: true,
  },
  like: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  listen: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  lyric: [
    {
      words: [
        {
          startTime: { type: Number },
          endTime: { type: Number },
          data: { type: String },
        },
      ],
    },
  ],
  songLink: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
