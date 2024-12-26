const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized: no token provided" });
    }
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(verifiedToken.userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    if (user.role !== "admin") {
      res.status(404).json({ success: false, message: "User is not an admin" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ success: false, message: "Unauthorized: invalid token" });
  }
};
module.exports = isAdmin;
