const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    cartData:{type:Object ,default:{}}
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Register User", UserSchema);

module.exports = UserModel;
