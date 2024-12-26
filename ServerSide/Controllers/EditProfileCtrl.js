const EditProfileModel = require("../Models/EditProfileSchema.js");

const EditProfile = async (req, res) => {
  const {
    fname,
    lname,
    email,
    address,
    currentPassword,
    newPassword,
    confirmNewPassword,
  } = req.body;
  try {
    const newProfile = new EditProfileModel(
      fname,
      lname,
      email,
      address,
      currentPassword,
      newPassword,
      confirmNewPassword
    );

    await newProfile.save();
    res.status(200).json({
      success: true,
      message: "Profile successfully updated",
      profile: newProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};
const FetchEditProfile = async (req, res) => {
  try {
    const Profile = await EditProfileModel.find();
    if (!Profile) {
      res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({
      success: true,
      message: "Profile information get successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server internal error" });
  }
};

module.exports = { EditProfile, FetchEditProfile };
