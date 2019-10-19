const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../setup/connection').secret;

const User = require('../../models/User');

//@type                    POST
//@route                  /api/auth/register
//@description       This route is for user registration
//@access               PUBLIC
router.post('/register',(req,res) => {
User.findOne({email:req.body.email})
         .then(user => {
             if(user){
                 return res.status(400).json({
                     exist:'User with the provided Email Id already exists'});
                 }
            else
            {
                const newUser = new User({
                    username:req.body.username,
                    email : req.body.email,
                    password:req.body.password
                });

                //Encrypting password using bcrypt
                bcrypt.genSalt(10,(err,salt) => {
                    bcrypt.hash(newUser.password,salt,(err,hash) => {
                        //Storing the hashed password in newUser
                        if(err) 
                           throw err;
                        newUser.password = hash;
                        newUser.save()
                                        .then(user => res.json(user))
                                        .catch(err => console.log("Error occure while storing user after hashing password "+err));
                    })
                })
                
            }
         })
         .catch(err => console.log("Error occured while checking email for availability "+err));
})


// @type           Post 
// @route          /api/auth/login
// @desc           This route is for user login
// @access       PUBLIC
router.post('/login',(req,res)=>{
    const email         = req.body.email;
    const password = req.body.password;
    User.findOne({email})
             .then(user => {
                 if(!user)
                    return res.status(404).send({
                        "Error" : "User with the provided email does not exist"
                    });
                
                bcrypt.compare(password,user.password)
                            .then(correct =>{
                                if(correct){
                                    const payload = {
                                        id : user.id,
                                        username : user.username,
                                        email: user.email
                                    }

                                    jsonwt.sign(
                                        payload,
                                        key,{
                                            expiresIn:10800
                                        },(err,token) => {
                                            if(err) throw err;
                                            res.json({
                                                success : true,
                                                token : "Bearer "+ token
                                            })
                                        }

                                    )
                                }
                            })
             })
})


module.exports = router;