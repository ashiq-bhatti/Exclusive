const express = require("express");
const { AddProduct ,upload,FetchProduct, RemoveProduct, UpdateProduct, FetchProductById } = require("../Controllers/ProductCtrl.js");

const ProductRoute = express.Router();

ProductRoute.post("/add-product",upload, AddProduct);
ProductRoute.get("/fetch-product", FetchProduct);
ProductRoute.put("/update-product-by-id/:id", UpdateProduct);
ProductRoute.get("/fetch-product-by-id/:id", FetchProductById);

ProductRoute.delete("/delete-product-by-id/:id", RemoveProduct);



module.exports = ProductRoute;
 