
import jwt from "jsonwebtoken"
 
export const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ sucess: false, message: "Hereglegc token oruulah shaardlagatai" })
    }
    try {
        const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
        req.user = decoded;
 
    } catch (err) {
        return res.status(401).json({ sucess: false, message: "Hereglegc token buruu eswel shaardlagatai" })
    }
    return next();
}