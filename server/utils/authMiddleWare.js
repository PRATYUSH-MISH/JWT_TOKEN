const jwt = require("jsonwebtoken")
const {secretKey} = require("../configuration/jwtConfig")
function authenticateToken(req, res, next) {
    const authHeader = req.header("Authorization")
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized:No token Provided" })
    }
    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized:Invalid token Format" })
    }
    jwt.verify(token, secretKey, (err, user) => {
        if (!err) {
            console.error("Token Verification Error",err);
            return res.status(403).json({ message: "Forbidden:Invalid token" })
        }
        req.user = user;
        next();
    })
}
function verifyToken(token){
  return   jwt.verify(token, secretKey);
}
module.exports = { authenticateToken,verifyToken }





