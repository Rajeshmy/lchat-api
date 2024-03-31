
const jwt = require("jsonwebtoken");


const generateToken = (gmail) => {
    if(!gmail) return 
    const token = jwt.sign({gmail:gmail},process.env.JWTSECRETKEY,{expiresIn:'10d'});

    return token;
};


module.exports = {generateToken}