const UserModel = require("../Models/user.js");

const AddToCart = async (req, res) => {
  try {
    const userData = await UserModel.findById(req.body.userId );
    const cartData = await userData.cartData;
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
  
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "Item added to cart", cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error, Item not added to cart",
      error: error.message,
    });
  }
};

const RemoveFromCart = async (req, res) => {
  try {
    const userData = await UserModel.findById(req.body.userId);
    const cartData = userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    console.log( cartData)
    res
      .status(200)
      .json({ success: true, message: "Item rmoved  from the cart" , itemId: cartData[req.body.itemId]});
  } catch (error) {
    res
      .status(500)
      .json(
        { success: false, message: "item not removed from the cart" },
        error
      );
  }
};

const FetchProduct = async (req, res) => {
  try {
    const userData = await UserModel.findById(req.body.userId);
    const cartData = userData.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { AddToCart, RemoveFromCart, FetchProduct };
