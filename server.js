const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json('public'));

let MONGO_URI = process.env.MONGO_URI || 'mongo://localhost/workout';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
