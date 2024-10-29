const express = require("express");
const { ListProduct } = require("../Controllers/ProductCtrl.js");

const ProductRoute = express.Router();

ProductRoute.post("/list-product", ListProduct);

module.exports = ProductRoute;
