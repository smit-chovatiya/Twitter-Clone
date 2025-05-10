const express=require('express');
const { addPost, getAllPost } = require('../Controller/post');
const router=express.Router();


router.post('/addPost',addPost);
router.get('/getAllPost',getAllPost)



module.exports=router;