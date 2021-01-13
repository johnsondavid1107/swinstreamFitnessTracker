const db = require("../models")


module.exports = function (app) {


    app.get("/api/workouts", function (req, res) {
        db.User.find({}).then(function (response) {
            console.log(response, "Api line9")
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
        console.log(req.params.id, "line 25 apiR")
        // db.Workout.update({}).then(function (response) {
        //     res.json(response)
        // })

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