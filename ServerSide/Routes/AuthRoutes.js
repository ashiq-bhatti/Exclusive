const express = require('express');
const { Register, Login, Logout } = require('../Controllers/AuthCtrl.js');

const AuthRoute = express.Router();

AuthRoute.post('/register', Register);
AuthRoute.post('/login', Login);
AuthRoute.post('/logout', Logout);



module.exports = AuthRoute;