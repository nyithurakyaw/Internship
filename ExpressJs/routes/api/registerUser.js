
const express = require('express');
const register = require('../../controller/registerController');
const router = express.Router();

router.post('/',register.handleNewUser);

module.exports = router