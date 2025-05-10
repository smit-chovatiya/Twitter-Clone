const mongoose=require('mongoose');

function db_connect(){
    mongoose.connect('mongodb://127.0.0.1:27017/Twitter-Clone').then(()=>{
        console.log('DB Connected...');
    })
}

module.exports=db_connect;