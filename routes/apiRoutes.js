const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts", (req, res) => {
  const newWorkout = new Workout(req.body); 
  
  Workout.create(newWorkout)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne(
    { _id: req.params.id},
    { $push: { exercises: req.body } }
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .sort({ "day": -1 })
  .limit(7)
  .exec((err, docs) => {
    if (err) throw err;
    res.status(200).json(docs);
  })
});

module.exports = router;