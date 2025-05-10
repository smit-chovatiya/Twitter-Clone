const express=require('express');
const { addComment } = require('../Controller/comment');
const router=express.Router();


router.post('/comment',addComment);


module.exports=router;