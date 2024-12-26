const express = require('express');
const { Contact, FetchContact } = require('../Controllers/ContactCtrl.js');


ContactRoutes = express.Router();

ContactRoutes.post('/contact-message',Contact);
ContactRoutes.get('/get-contact-message',FetchContact);


module.exports = ContactRoutes;