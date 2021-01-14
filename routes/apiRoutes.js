const db = require("../models")
const User = require("../models/User")
const { count } = require("../models/User")


module.exports = function (app) {

    //Might need to add a find tool to look up up date
    app.get("/api/workouts", function (req, res) {

        db.User.find({}).sort({}).then(function (response) {
            res.json(response)
        })

    })

    app.post("/api/workouts", function (req, res) {

        console.log(req.body, "line 17 apiR")
        db.User.create({}).then(function (response) {
            res.json(response)
        })

    })

    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body, "line26APi")
        db.User.find({ _id: req.params.id }).then(function (response) {
            let count = req.body.duration
            // console.log(response[0].exercises, "line30API")
            for (let i = 0; i < response[0].exercises.length; i++) {
                count += response[0].exercises[i].duration
            }
            // console.log(count)
            if (count === 0) { count = req.body.duration }

            db.User.update({
                _id: req.params.id
            },
                {
                    $push: {
                        exercises: req.body
                    },
                    $set: {
                        totalDuration: count
                    }
                }).then(function (response) {
                    // console.log(req.body, "line81APi")

                })





        })





    })


    app.get("/api/workouts/range", function (req, res) {
        db.User.find().sort({ day: 1 }).then(function (response) {
            console.log(response[1], "line67API")
            res.json(response)
        })
    })

    // app.get("/exercise?:id", function (req, res) {
    //     console.log(req.params.id, "line42")
    //     Workout.find({}).then(function (response) {
    //         res.json(response)

    //     })

    // })

    // app.get("/stats", function (req, res) {
    //     res.sendFile(path.join(__dirname, "public/stats.html"))

    // })

}