const User=require('../Model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// Register....
const handlerRegister=async(req,res)=>{
    try{
        const {name,email,password,role,gender,phone}=req.body;
        const existingUser=await User.findOne({email:email});
        if(existingUser) return res.json({Status:'Failed',Message:'Email Can Already Registerd...'});
        else{
            if(!name || !email || !password || !role || !gender || !phone){
                return res.json({Status:'Failed',Message:'All Fileds Are Required....'});
            }
            // const salt=bcrypt.salt(10);
            const hashPassword=await bcrypt.hash(password,10);
            const user=new User({
                name:name,
                email:email,
                password:hashPassword,
                role:role,
                gender:gender,
                phone:phone
            });
            await user.save();
            // Genrate Token..
            const Token=jwt.sign({userID:user._id},process.env.jwtSign);
            res.header('auth-token',Token).status(201).json({Status:'Success',Messsage:'Register Successfully....',userDetails:user,Token:Token});
        }

    }catch(err){
        console.log('Error:',err.message);
        res.status(500).send('Server Issue...');

    }
}


// Login...
const handlerLogin=async(req,res)=>{
    try{
        const {email,password,role}=req.body;
        const user=await User.findOne({email:email});
        if(!user) return res.status(404).json({Status:'Failed',Message:'Email Can Not Register...'});
        
        const isMatchPassword=await bcrypt.compare(password,user.password);
        if(!isMatchPassword) return  res.status(404).json({Status:'Failed',Message:'password Incorrect!'});

        if(user.role!=role) return res.status(403).json({Status:'Failed',Message:'Unauthorized Role!'});

        const roleStaus=user.role==='Admin' ? 'Admin Login Successfully!' : 'User Login Successfully!';
        res.status(200).json({Status:'Success',Message:'Login Successfully!',UserInfo:user,RoleStaus:roleStaus});

    }
    catch(err){
        console.log('Error:',err.message);
        res.status(500).send('server issue...');
    }
}

module.exports={
    handlerRegister,
    handlerLogin
}