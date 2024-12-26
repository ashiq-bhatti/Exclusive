const mongoose = require("mongoose");

const EditProfileSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    currentPassword: { type: String, required: true },
    newPassword: { type: String, required: true },
    confirmNewPassword: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EditProfileModel = mongoose.model("EditProfile", EditProfileSchema);


module.exports = EditProfileModel;
