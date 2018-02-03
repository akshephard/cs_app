const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Course = require('../models/course');
const bluebird = require('bluebird');
//mongoose.Promise = bluebird;
/*
// add user changed from post
router.get('/addcourse', (req, res, next) => {
  res.send('addcourse');
});
*/


// Register
router.post('/addcourse', (req, res, next) => {
  //console.log("received");
  let newCourse = new Course({
    name: req.body.name,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end
  });
  console.log(newCourse.name);
  Course.addCourse(newCourse, (err, course) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
      console.log("New course entered"); //this works
      console.log("Name: " + newCourse.name); //this works
      console.log("Title: " + newCourse.title); //this works
      console.log("Start: " + newCourse.start); //this works
      console.log("End: " + newCourse.end); //this works
    }
  });
});
router.get('/auth', (req,res, next) => {
  res.send('AUTHENTICTE');
});
module.exports = router;
