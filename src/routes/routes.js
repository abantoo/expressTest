const express = require("express");
const router = express.Router();

const feedbackController = require("../controller/FeedbackController");

router.get("/", feedbackController.getAllFeedbacks)

router.get("/feedbacks", feedbackController.feedbacks)

// router.get("/", (req, res, next) => {
//     res.redirect("/feedbacks");
// })

router.post("/", feedbackController.postFeedback)

module.exports = router;