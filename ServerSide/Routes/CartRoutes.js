
const express = require('express');
const { AddToCart, RemoveFromCart, FetchProduct, DEleteItemFromCart } = require('../Controllers/CartCtrl.js');
const AuthMiddleware = require('../MidleWares/AuthMW.js');

const CartRoutes = express.Router();
 
CartRoutes.post('/add-to-cart', AuthMiddleware , AddToCart);
CartRoutes.post('/remove-item-from-cart', AuthMiddleware , RemoveFromCart);
CartRoutes.get('/get-item-from-cart', AuthMiddleware , FetchProduct);

module.exports = CartRoutes;