require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    
  const {token}= req.headers;
  if(token){
    
    jwt.verify(token, process.env.JWT_SEC,(err,user)=>{
        //console.log(user)
        if(err){
            return res.status(400).json("some error occured");
           
        } req.user = user
        next()

    })
  }else{
    return res.status(400).json('token not valid')
  }

};

module.exports = { verifyToken };


