
const { generateAccessToken } = require('../helpers/generateToken');
const userService = require('../services/userService');
const bcrypt = require('bcrypt');

exports.registerUser = async (req,res)=>{
    try{

        const {password,email} = req.body;
        if(!password){
            return res.status(400).json({
                error:'password can not be empty'
            })
        }
        // checking if a user already exists in a database
        const user= await userService.findUserByEmail(email)

        if(user){
            return res.status(400).json({
                success: false,
                message:"This email is already registered"
            })
        }
        const salt = await bcrypt.genSalt(10);
        //hash password

        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = {
            ...req.body,
            password: hashedPassword
        };
        //save user in the database
        const savedUser =  await userService.addUser(newUser) ;

        return res.status(201).json({
            success:true,
            message: 'user registred successfully',
            result: savedUser
        })
    }
    catch(error){
       return res.status(500).json({
            success: false,
            Error:error.message
        })
    }
};

exports.login = async(req,res) =>{
    try{
        console.log("hello")
       
        const {email , password} = req.body;
        if(!email && !password){
            return res.status(400).json({
                success:false,
                message:'Please fill empty fields'
            })
        };
        const user = await userService.findUserByEmail(email)
         console.log(user.id)
        

        if(!user) {
            return res.status(401).json({
                message: 'Wrong email or Paswword'
            })
        };
        //hash and compare passwords
        const matchedPassword  = await bcrypt.compare(password,user.password);

        if(!matchedPassword){
             return res.status(401).json({
                message: 'Wrong email or Paswword'
            })
        };

        const token = await generateAccessToken(user);

        return res.status(201).json({
            success: true,
            message: 'logged in successfully',
            accessToken: token
        })
    }
    catch(error){
        return res.status(500).json({
            error: error.message
        })
    }
}