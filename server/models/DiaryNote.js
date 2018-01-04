const mongoose = require('mongoose');

const diaryNote = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    public: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('diaryNote', diaryNote);