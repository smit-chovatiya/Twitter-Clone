const User=require('../Model/user');
const Like=require('../Model/like');
const Post=require('../Model/post');


// add a like
const addLike=async(req,res)=>{
    try{
        const {uid,pid,like}=req.body;

        const user=await User.findOne({_id:uid});
        if(!user) return res.status(404).json({Status:'Failed',Message:'User has been not founded...'});

        const post=await Post.findOne({_id:pid});
        if(!post) return res.status(404).json({Status:'Failed',Message:'post has been not founded...'});

        const likes=new Like({
            UserID:user._id,
            UserName:user.name,
            PostID:post.id,
            Like:like
        })

       post.Likes+=1;
       await post.save();
       await likes.save();

        res.status(201).json({Status:'Success',Message:'All Post Here:',POST:likes});
    }
    catch(err){
        console.log('Error:',err.message);
        res.send('Server ISuue..');
    }
}

module.exports={
    addLike
}