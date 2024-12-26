const jwt = require("jsonwebtoken");
 
const AuthMiddleware = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied.>>>" });
  }
  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({
      success: false,
      message: "Authentication failed with error>>>: " + error.message,
    });
  }
};


module.exports = AuthMiddleware; 
