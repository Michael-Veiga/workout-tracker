const router = require('express').Router();
const Workout = require('../models/Workout.js');
// route to create new workouts
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});
// route to update existing workouts
// use runValidators so that inputted exercises fulfill the schema params
router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    // $push appends the exercises body array
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});
// route to get existing workout data
router.get('/api/workouts', (req, res) => {
  Workout.find()
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
