const ProductModel = require("../Models/Product");
const UserModel = require("../Models/user");

const addToWishlist = async (req, res) => {
  const userId = req.body.userId;
  console.log(userId, "userid");
  const { productId } = req.body;
  try {
    const productExist = await ProductModel.findById(productId);
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isAlreadyInWishlist = user.wishlist.find(
      (id) => id.toString() === productId
    );

    if (isAlreadyInWishlist) {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $pull: { wishlist: productId } },
        { new: true }
      );
      return res.status(200).json({
        user: updatedUser,
        message: "Product removed from wishlist",
      });
    } else {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { $push: { wishlist: productId } },
        { new: true }
      );
      return res.status(200).json({
        user: updatedUser,
        message: "Product added to wishlist",
      });
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
const fetchWishlist = async (req, res) => {
  const _id = req.body.userId;
  try {
    const findUser = await UserModel.findById(_id).populate("wishlist");

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Fetched wishlist successfully", findUser });
  } catch (error) {
    console.error("Error getting wishlist:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { addToWishlist, fetchWishlist };  
