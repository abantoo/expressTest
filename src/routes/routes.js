const express = require("express");
const router = express.Router();

const feedbackController = require("../controller/FeedbackController");

router.get("/feedbacks", feedbackController.getAllFeedbacks)

router.get("/", (req, res, next) => {
    res.redirect("/feedbacks");
})

router.post("/feedbacks", feedbackController.postFeedback)

module.exports = router;