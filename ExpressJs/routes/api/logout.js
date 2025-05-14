
const express = require('express');
const logout = require('../../controller/logoutController')
const router = express.Router();

router.get('/',logout.handleLogout);

module.exports = router;