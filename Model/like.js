const mongoose=require('mongoose');

const likeSchema=new mongoose.Schema({
    UserID:{
        type:String
    },
    PostID:{
        type:String
    },
    UserName:{
        type:String
    },
    Like:{
        type:Number,
        min:1
    }
});

// model
const Like=mongoose.model('Like',likeSchema);

module.exports=Like;