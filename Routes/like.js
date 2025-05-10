const express=require('express');
const { addLike } = require('../Controller/like');
const router=express.Router();


router.post('/like',addLike);

module.exports=router;