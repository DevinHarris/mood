const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { nanoid } = require('nanoid');

const MoodSchema = new Schema({
    mood: {
        type: String,
        required: true,
    },

    submittedBy: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
    },

    id: {
        type: String,
        default: () => nanoid(10),
    },

    dislikes: {
        type: Number,
        default: 0
    },

    background: {
        type: String,
        default: 'https://images.pexels.com/photos/4448848/pexels-photo-4448848.jpeg'
    }
})

module.exports = mongoose.model('Mood', MoodSchema);