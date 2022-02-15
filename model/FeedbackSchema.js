const mongoose = require("mongoose");

//const Schema = mongoose.Schema();

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    feedback: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = feedbackSchema;