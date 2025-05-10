const User=require('../Model/user');
const Post=require('../Model/post');

// add a post
const addPost=async(req,res)=>{
    try{
        const {uid,title,Likes}=req.body;
        const user=await User.findOne({_id:uid});
        if(!user) return res.status(404).json({Status:'Failed',Message:'User has been not founded...'});

        const post=new Post({
            UserID:user._id,
            UserName:user.name,
            Title:title,
            Likes:Likes

        });
        await post.save();

        res.status(201).json({Status:'Success',Message:'Post Created Successfully!!!',post:post});
    }
    catch(err){
        console.log('Error:',err.message);
        res.json({Message:'Server Issue...'});
    }
}


// get all post
const getAllPost=async(req,res)=>{
    try{
        const {uid}=req.body;
        const user=await User.findOne({_id:uid});
        if(!user) return res.status(404).json({Status:'Failed',Message:'User has been not founded...'});

        const post=await Post.find();
        res.status(201).json({Status:'Success',Message:'All Post Here:',AllPost:post});
    }
    catch(err){
        console.log('Error:',err.message);
        res.json({Message:'Server Issue...'});
    }
}


module.exports={
    addPost,
    getAllPost
}