const mongoose = require('mongoose');

const Qoute = mongoose.Schema({
    qoute: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        minlength: 1,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    _creatorId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    // sharedPeople: {
    //     type: Array
    // },
    public: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Qoute', Qoute);


