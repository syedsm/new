const express = require('express');
const router = express.Router();
const { rou, heloroute } = require('../controller/apiController');

router.get('/', rou);
router.get('/hello', heloroute);

module.exports = router;
