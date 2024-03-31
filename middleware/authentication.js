
const jwt = require("jsonwebtoken");


const validateToken = async(req,res,next)=>{

    const token = req.headers.authorization ||req.headers.Authorization
   
    if(token && token.startsWith("Bearer")){
       
      const Token = token.split(" ")[1];
       
        jwt.verify(Token,process.env.JWTSECRETKEY,(err,decoded)=>{
            if(err){
                console.log(err,"error at validating token",process.env.JWTSECRETKEY);
                res.end("error at validating token")
            }else{
                console.log(decoded,"token value");
                req.user = decoded;
                next()
            }
           })
     
    }else{
        res.end("invalid token")
    }
};

module.exports = {validateToken}
