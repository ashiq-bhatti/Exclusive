const UserModel = require("../Models/user.js");

const GetUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in getPatient:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role === "admin") {
      return res.status(409).json({
        success: false,
        message: "Admins cannot delete yourself ",
      });
    }
    await UserModel.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

module.exports = { GetUser , DeleteUser };
