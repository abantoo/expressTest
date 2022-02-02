const mongoose = require("mongoose");

//const Schema = mongoose.Schema();

const feedbackSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    feedback: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
