const express = require("express");
const { AddProduct ,FetchProduct, upload } = require("../Controllers/ProductCtrl.js");

const ProductRoute = express.Router();

ProductRoute.post("/add-product",upload.single('image') , AddProduct);
ProductRoute.get("/fetch-product", FetchProduct);


module.exports = ProductRoute;
 