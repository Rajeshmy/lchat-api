const User = require('../database/models/users');
const bcrypt = require('bcrypt');


const signUp=async(req,res)=>{
   const {name,gmail,password} = req.body;

   if(name && gmail&&password){
      
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password,salt);
      const user = new User({name,gmail,password:pass});
        user.save().then((d)=>{
          console.log('saved user successfully',d)
          res.status(200).json("signed up successfully")
        }).catch((e)=>{
          console.log(e,"error while saving")
          res.status(500).json(e)
        });
   }else{
    res.status(400).json("please enter all details")
   }
};


module.exports = {signUp}; 