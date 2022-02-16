const mongoose = require("mongoose");
const Feedback = require("../model/FeedbackModel");

exports.postFeedback = (req, res, next) => {
    console.log('req', req.body);
    const email = req.body.email;
    const feedback = req.body.feedback;
    const message = new Feedback({
        email: email,
        feedback: feedback
    })
    message.save()
        .then((result) => console.log("successfully written to db"))
        .catch((error) => console.log(` The problem is:  ${error}`));

    res.json({
        message
    })

}

exports.getAllFeedbacks = (req, res, next) => {
    Feedback.find()
        .then(result => {
            res.send(result)
            // res.render("index", {
            //     result: result
            // })
            console.log("Successfully fetched data from database")
        })
        .catch(error => console.log(error))

}

exports.feedbacks = (req, res, next) => {

    Feedback.find()
        .then(result => {

            res.render("index", {
                result: result
            })
            console.log("Successfully fetched data from database");
        })
        .catch(error => console.log(error))

}