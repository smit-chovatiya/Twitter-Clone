const mongoose=require('mongoose');


const postSchema=new mongoose.Schema({

    UserID:{
        type:String
    },
    UserName:{
        type:String
    },
    Title:{
        type:String
    },
    Likes:{
        type:Number
    },
    Comments:{
        type:Array
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }


},{timestamps:true});


// modle
const Post=mongoose.model('Post',postSchema);

module.exports=Post;