const db = require("../models")
const User = require("../models/User")
const { count } = require("../models/User")


module.exports = function (app) {

    //Might need to add a find tool to look up up date
    app.get("/api/workouts", function (req, res) {

        db.User.find({}).sort({}).then(function (response) {

            const newObj = {
                ...response
            }
            newObj.count = 10

            // console.log(response)
            // console.log(newObj)

            // console.log(response)
            res.json(response)





            // console.log(response[0].exercises[0].duration, "line13API")
            // console.log(response.length, "line 14")



        })



    })
    //can delete may not need
    // app.get("/exercise/:id", function (req, res) {
    //     console.log(req.params.id, "line17API")
    //     db.User.find({
    //         _id: req.params.id
    //     }).then(function (response) {

    //         res.json(response)
    //     })

    // })

    app.post("/api/workouts", function (req, res) {

        console.log(req.body, "line 17 apiR")
        db.User.create({}).then(function (response) {
            res.json(response)
        })

    })

    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body, "line26APi")
        db.User.find({ _id: req.params.id }).then(function (response) {
            let count = 0
            console.log(response[0].exercises, "line61API")
            for (let i = 0; i < response[0].exercises.length; i++) {
                count += response[0].exercises[i].duration
            }
            console.log(count)


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
                    console.log(req.body, "line68")

                })





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