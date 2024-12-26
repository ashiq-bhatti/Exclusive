const express = require('express');
const { GetUser, DeleteUser } = require('../Controllers/AdminCtrl.js');
const isAdmin = require('../MidleWares/VerifyToken.js');


const AdminRoute = express.Router();

AdminRoute.get('/get-user',isAdmin , GetUser);
AdminRoute.delete('/delete-user/:id',isAdmin , DeleteUser);


module.exports = AdminRoute; 