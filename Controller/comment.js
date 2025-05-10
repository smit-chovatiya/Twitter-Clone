const User=require('../Model/user');
const Post=require('../Model/post');
const Comment=require('../Model/comment');


// add a comment
const addComment=async(req,res)=>{
    try{
        const {uid,pid,Comments}=req.body;
        const user=await User.findOne({_id:uid});
        if(!user) return res.status(404).json({Status:'Failed',Message:'User has been not founded...'});

        const post=await Post.findOne({_id:pid});
        if(!post) return res.status(404).json({Status:'Failed',Message:'post has been not founded...'});

        const comment=new Comment({
            UserID:user._id,
            UserName:user.name,
            PostID:post._id,
            Comment:Comments
        });

        await comment.save();
        post.Comments.push(comment);
        await post.save();

        res.status(201).json({Status:'Success',Message:'Add Comment Successfully...',Comment:comment});
    }
    catch(err){
        console.log('Error:',err.message);
        res.json({Message:'Server Issue...'});
    }
};



module.exports={
    addComment
}