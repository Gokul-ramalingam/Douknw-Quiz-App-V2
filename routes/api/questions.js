const express = require('express');
const router = express.Router();
const passport = require('passport');

//Loading user model
const User = require('../../models/User')



//type                        GET
//@route                   /api/auth
//@desc                    This route is to get the questions
//@access                 Private
router.get('/questions',passport.authenticate('jwt' , {session : false}),(req,res)=>{
 User.findOne({_id : req.user.id})
         .then(user => {
             if(!user)
             return res.status(404).json({profilenotfount:'No Profile Found'});
         res.json(user);
         })
         .catch(err => console.log('Something went wrong while searching for the user '+err));
})