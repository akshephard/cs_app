const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

// Connect To Database
//mongoose.connect(config.database); //this method gives warning
// Connect To Database
//this method gives no warning
mongoose.connect('mongodb://localhost:27017/cs_app', {
  useMongoClient: true,
  promiseLibrary: require('bluebird')});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


const app = express();

const course = require('./routes/courses');
const instructor = require('./routes/instructors');

// Port Number
//const port = process.env.PORT || 8080;
const port = 3000;

// CORS Middleware
app.use(cors());
//basically what this does: add what is in cs_app/public into root of webserver
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());

app.use('/courses', course);
app.use('/instructors', instructor);

/*
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//this is the catchall route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
*/
// Index Route
/*
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});
*/
// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
