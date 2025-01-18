const express = require("express");
const { addToWishlist, fetchWishlist } = require("../Controllers/WishListCtrl");
const AuthMiddleware = require("../MidleWares/AuthMW");

const wishListRoutes = express.Router();
wishListRoutes.put("/add_to_wish_list",AuthMiddleware, addToWishlist);
wishListRoutes.get("/get_wish_list",AuthMiddleware, fetchWishlist);

module.exports = wishListRoutes;

 