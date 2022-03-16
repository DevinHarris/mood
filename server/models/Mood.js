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
        required: true,
        default: nanoid(5),
        unique: true
    },

    dislikes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Mood', MoodSchema);