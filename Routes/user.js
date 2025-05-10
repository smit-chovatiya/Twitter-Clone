const express=require('express');
const router=express.Router();
const {handlerRegister,handlerLogin}=require('../Controller/user');
const auth = require('../Middleware/auth');

router.post('/register',handlerRegister);
router.get('/login',auth,handlerLogin);


module.exports=router;