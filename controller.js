const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 9000;

//routes
const auth = require('./routes/api/auth');

//MongoDB Configuration
const db =  require('./setup/connection').url;

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
                   .then(()=> console.log("Connection with MongoDB established Successfully"))
                   .catch(err=> console.log('Error occurred while establishing connection with mongodb '+err));

//Passport Middleware
app.use(passport.initialize())

//Main Routes
app.use('/api/auth',auth)

app.listen(port,()=>console.log(`App is running at port ${port}`));

