const express = require('express');
const router = express.Router();
const passport = require('passport');
const authorization = require('../../middleware/authorization');

//Loading user model
const User = require('../../models/User')



//type                        GET
//@route                   /api/questions
//@desc                    This route is to get the questions
//@access                 Private
router.get('/',authorization,(req,res) => {
 User.findById(req.user.id)
         .then(user => {
             if(!user)
             return res.status(404).json({profilenotfount:req.user.id});
         res.json(user);
         })
         .catch(err => console.log('Something went wrong while searching for the user '+err));
})

module.exports = router;