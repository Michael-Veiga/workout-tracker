const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter an exercise type',
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter an exercise name',
        },
        duration: {
          type: Number,
          required: 'Enter the duration of your exercise in minutes',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      // include virtual properties when the data is requested (virtual attributes are attributes that are convenient to have but dont not get persisted to mongodb)
      virtuals: true,
    },
  }
);
// cant use an arrow function with (this)
workoutSchema.virtual('totalDuration').get(function () {
  // reduce the array of exercises to the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
