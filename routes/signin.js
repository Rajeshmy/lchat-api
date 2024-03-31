
const express = require('express');
const {signIn} =require('../controller/signIn');

const router = express.Router();

router.get('/',signIn);


module.exports=router;