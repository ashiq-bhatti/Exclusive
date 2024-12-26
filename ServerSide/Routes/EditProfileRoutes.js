const express = require('express');
const { EditProfile, FetchEditProfile } = require('../Controllers/EditProfileCtrl.js');

const EdditProfileRoutes = express.Router();

EdditProfileRoutes.post('/edit-profile',EditProfile);
EdditProfileRoutes.get('/fetch-profile',FetchEditProfile);

module.exports = EdditProfileRoutes 