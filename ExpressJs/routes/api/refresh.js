
const express = require('express');
const refresh = require('../../controller/refreshController')
const router = express.Router();

router.get('/',refresh.refreshHandleLogin);

module.exports = router;