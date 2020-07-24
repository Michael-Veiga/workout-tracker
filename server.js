const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

let MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/workout';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
