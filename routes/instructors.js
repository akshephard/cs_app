const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Instructor = require('../models/instructor');
const bluebird = require('bluebird');
//mongoose.Promise = bluebird;
/*
// add user changed from post
router.get('/addcourse', (req, res, next) => {
  res.send('addcourse');
});
*/


// Register
router.post('/addinstructor', (req, res, next) => {
  console.log("received");
  let newInstructor = new Instructor({
    name: req.body.name,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end
  });
  console.log(newInstructor.name);
  Instructor.addInstructor(newInstructor, (err, course) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
      console.log("New instructor entered"); //this works
      console.log("Name: " + newInstructor.name); //this works
      console.log("Title: " + newInstructor.title); //this works
      console.log("Start: " + newInstructor.start); //this works
      console.log("End: " + newInstructor.end); //this works
    }
  });
});
router.get('/auth', (req,res, next) => {
  res.send('AUTHENTICTE');
});
module.exports = router;
