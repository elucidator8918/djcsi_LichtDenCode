const jwt = require('jsonwebtoken');

const authenticate =(req,res,next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]//remove the bearer string
        const decode = jwt.verify(token,'verySecretValue')
        req.user=decode
        next()
    }
    catch(err){
        res.json({
            message :"Authentication failed"
        })
    }
}
module.exports = authenticate