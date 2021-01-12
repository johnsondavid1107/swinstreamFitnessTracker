const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    array: [Array]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
DoeDo