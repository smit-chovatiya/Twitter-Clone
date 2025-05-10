const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    UserID:{
        type:String
    },
    PostID:{
        type:String
    },
    UserName:{
        type:String
    },
    Comment:{
        type:String 
    }
});

// model
const Comment=mongoose.model('Comment',CommentSchema);

module.exports=Comment;