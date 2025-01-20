const express = require("express");
const AuthMiddleware = require("../MidleWares/AuthMW.js");
const {
  PlaceOrder,
  verifyOrder,
  fetchAllOrder,
  updateOrderStatus,
  fetchSingleUserOrder,
} = require("../Controllers/OrderCtrl.js");

const OrderRoutes = express.Router();
OrderRoutes.post("/place-order", AuthMiddleware, PlaceOrder);
OrderRoutes.post("/verify-order", verifyOrder);
OrderRoutes.get("/fetch-user-order",AuthMiddleware, fetchSingleUserOrder);
OrderRoutes.get("/product-order", fetchAllOrder);
OrderRoutes.post("/order-status-update", updateOrderStatus);
OrderRoutes.get("/fetch-user-order/:id", fetchSingleUserOrder);

module.exports = OrderRoutes;
