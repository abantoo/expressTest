const express = require("express");
const router = express.Router();

const feedbackController = require("../controller/FeedbackController");

router.get("/", feedbackController.getAllFeedbacks)

router.post("/", feedbackController.postFeedback)

module.exports = router;