const mongoose = require("mongoose");
const Feedback = require("../model/FeedbackModel");

exports.postFeedback = (req, res, next) => {

    const email = req.body.mail;
    const feedback = req.body.feedback;
    const message = new Feedback({
        email: email,
        feedback: feedback
    })

    message.save()
        .then((res) => console.log("successfully written to db"))
        .catch((err) => console.log(err));

}

exports.getAllFeedbacks = (req, res, next) => {
    Feedback.find()
        .then(result => {
            res.send(result)
            console.log(result)
        })
        .catch(err => console.log(err))

}