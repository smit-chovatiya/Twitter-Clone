const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    try{
        const token=req.header('auth-token');
        if(!token) return res.status(404).send('Invalid Token!Access Deniaed...');
        const decode=jwt.verify(token,process.env.jwtSign);
        res.user=decode;
        next();
    }
    catch(err){
        console.log('Error:',err.message);
        res.send('No Token Provided...');
    }
}