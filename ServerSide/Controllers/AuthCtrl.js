const UserModel = require("../Models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashPassword });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server internal error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await UserModel.findOne({ email });

    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isPasswordMatch = await bcryptjs.compare(
      password,
      userExist.password
    );

    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: userExist._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: userExist,
    });
   

  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json({ success: false, message: "Server internal error" });
  }
};

const Logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });

  } catch (error) {
    console.log("Error during logout:", error);
    res.status(500).json({ success: false, message: "Server internal error" });
  }
};
module.exports = { Register, Login, Logout };
