const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    avt: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
});


userSchema.index({ username: 1, email: 1 }, { unique: true });


const User = mongoose.model('User', userSchema);

module.exports = User;