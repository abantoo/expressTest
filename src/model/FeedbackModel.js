const mongoose = require("mongoose");
const feedbackSchema = require("./FeedbackSchema")

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;