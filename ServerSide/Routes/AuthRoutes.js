const express = require('express');
const { Register, Login, Logout } = require('../Controllers/AuthCtrl.js');

const AuthRoute = express.Router();

AuthRoute.post('/user-register', Register);
AuthRoute.post('/user-login', Login);
AuthRoute.post('/logout', Logout);


module.exports = AuthRoute;