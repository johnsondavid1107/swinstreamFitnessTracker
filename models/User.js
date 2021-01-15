const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema([{
    day: {
        type: Date,
        default: new Date(new Date().setDate(new Date().getDate()))
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },

    }],
    totalDuration: {
        type: Number,
        default: 0
    }

}]);

const User = mongoose.model("User", UserSchema);

module.exports = User;
