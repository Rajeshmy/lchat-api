const {generateToken} = require('../middleware/jwt');
const User = require("../database/models/users")
const bcrypt = require('bcrypt');


const signIn=async(req,res)=>{
   const {gmail,password} = req.body;
   
   if(gmail&&password){
      
      const user = await User.findOne({ gmail:gmail });
      if(!user) res.end("ending");
       
       
       const flag = await bcrypt.compare(password,user.password);
       
      if(flag){
         const Token = generateToken(gmail);

         if(Token){
           res.status(200).json(Token);
         }else{
            res.end()
         }
      }else{
         res.end()
      }
     
   }else{
    res.status(400).json("Enter all fields")
   }
};


module.exports = {signIn}; 