const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:3
    },

    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        minlength:8,
        unique:true
    },
    role:{
        type:String,
        enum:['Admin','User']
    },
    gender:{
        type:String,
        enum:['Male','Female','Other']
    },
    phone:{
        type:Number,
        min:10
    }

},{timestamps:true});

// model
const User=mongoose.model('User',userSchema);

module.exports=User;