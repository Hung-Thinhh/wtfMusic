const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    songId: {
        type: "string",
        ref: 'Song',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ban: {
        type: Boolean,
        default: false
    },
    reportCount: {
        type: Number,
        default: 0
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;