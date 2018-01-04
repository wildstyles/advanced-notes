const mongoose = require('mongoose');

const Note = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        trim: true
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    _creatorId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Note', Note);