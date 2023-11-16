
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const secret = process.env.JWT_SECRET;

exports.generateAccessToken = async(user) =>{
    
    const payload = {
        id: user.id,
        email: user.email
    }
    
    const options ={expiresIn: '1h'};

    return await jwt.sign(payload,secret,options)
};

exports.verifyAccessToken = async(token) =>{
    
    try{
        const decoded = jwt.verify(token,secret);
        return {success: true,data:decoded}

    }
    catch(error){
        return {success: false, error: error.message}
    }
}