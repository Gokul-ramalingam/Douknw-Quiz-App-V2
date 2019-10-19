const jwt = require('jsonwebtoken');
const key = require('../setup/connection').secret;


module.exports = (req,res,next) => {

//get the token from the header if present
const token = req.headers["token"] || req.headers["authorization"];
//if no token found, return response (without going to the next middelware)
if(!token)
return res.status(401).send("Access denied. Token is not provided")

try{
    const decoded = jwt.verify(token,key);
    req.user = decoded;
    next();
}
catch(ex){
    res.status(400).send('Invalid Token')
}
}