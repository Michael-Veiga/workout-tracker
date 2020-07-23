const router = require('express').Router();
const Workout = require('../models/Workout');

router.post('/api/workouts', (req, res) => {
  Workout.create({}).then();
});
