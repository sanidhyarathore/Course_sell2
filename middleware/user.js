const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwttoken=words[1];
    const decodedValue=jwt.verify(jwttoken,JWT_SECRET);
    
    if(decodedValue.username){
        req.username = decodedValue.username;
        next();
    }else{
        res.status(403).json({
            message: "You are not Authenticated"
        })
    }
}

module.exports = userMiddleware;