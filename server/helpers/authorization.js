const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{
    let bearerToken = req.headers['authorization'];
    //check for bearer bearerToken
    if(!bearerToken || !bearerToken.includes('Bearer')){
        return res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: "Not Authorized"
        })
    }
    //verify if there is bearerToken
    let token = bearerToken.split(' ')[1];
    if(!token){
        return res.status(config.errorRequest.code).json({
            message: config.errorRequest.message,
            error: "Not Authorized"
        })
    }
    
    return jwt.verify(
        token, 
        config.secret,
        (err, result)=>{
            if(err){
                return res.status(config.errorRequest.code).json({
                    message: config.errorRequest.message,
                    error: "Not Authorized"
                })  
            }

            return next()
        })
}