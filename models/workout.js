const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: String, required: true },
  exercises: [Schema.Types.Mixed]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
