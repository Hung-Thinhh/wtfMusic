const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema({
    userId: {
        type: Array,
        required: true,
        trim: true,
        index: true
    },
    thumbnail: {
        type: String,
        required: true
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

const history = mongoose.model('history', historySchema);

module.exports = history;