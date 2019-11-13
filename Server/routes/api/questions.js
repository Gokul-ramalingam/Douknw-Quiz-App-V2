const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../middleware/authorization');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('../../models/Question')

//Loading user model
const User = require('../../models/User')



//type                        GET
//@route                   /api/questions
//@desc                    This route is to get the questions
//@access                 Private
router.get('/',(req,res) => {
 Question.find({})
                   .then(questions => {
                       if(!questions)
                          return res.status(404).json({noquestions : "no questions found"})
                     return res.json(questions);
                   })
                   .catch(err => console.log('Something went wrong while searching for the user '+err));
})

module.exports = router;