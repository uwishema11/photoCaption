const { verifyAccessToken } = require("../helpers/generateToken");

exports.checkAuth = async (req,res,next) =>{

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    
    //verify if there is token
     if(!token){
        return res.status(401).json({success: false, error:'Login first before applying this action'})
     };

     const result = await verifyAccessToken(token);

     if(!result.success){
        return res.status(403).json({success: false, error:'Login first before applying this action'})
     };
     
     req.user = result.data;
     next();
};