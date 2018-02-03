const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const bluebird = require('bluebird');
mongoose.Promise = bluebird;
const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  }
});

const Course = module.exports = mongoose.model('Course', CourseSchema); //UserSchema contains the fields of data for our users
module.exports.addCourse = function(newCourse, callback){
  //bcrypt.genSalt(10, (err, salt) => {
    //bcrypt.hash(newCourse.name, salt, (err, hash) => {
      //if(err) throw err;
      //newUser.password = hash;
      newCourse.save(callback);
    //});
  //});
}
