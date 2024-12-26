const express = require('express');
const AuthMiddleware = require('../MidleWares/AuthMW.js');
const { PlaceOrder, verifyOrder } = require('../Controllers/OrderCtrl.js');

const OrderRoutes = express.Router();
OrderRoutes.post('/place-order', AuthMiddleware,PlaceOrder);
OrderRoutes.post('/verify-order', verifyOrder);


 module.exports = OrderRoutes