const express = require('express');
const { GetUser, DeleteUser } = require('../Controllers/AdminCtrl.js');


const AdminRoute = express.Router();

AdminRoute.get('/get-user', GetUser);
AdminRoute.delete('/delete-user/:id', DeleteUser);


module.exports = AdminRoute;