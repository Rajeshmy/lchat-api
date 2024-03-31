

const express = require('express');
const {sendMessage} =require('../controller/sendMessage');
const {validateToken} = require('../middleware/authentication')

const router = express.Router();
router.use(validateToken)

router.post('/',sendMessage);


module.exports=router;