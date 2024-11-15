const express = require("express");
const { AddProduct ,FetchProduct, uploadmidleware } = require("../Controllers/ProductCtrl.js");

const ProductRoute = express.Router();

ProductRoute.post("/add-product",uploadmidleware , AddProduct);
ProductRoute.get("/fetch-product", FetchProduct);


module.exports = ProductRoute;
 