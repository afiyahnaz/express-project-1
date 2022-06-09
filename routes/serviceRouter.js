const express = require('express');
const serviceCtrl = require('../controllers/serviceCtrl');
const router = express.Router();
router.get('/services', serviceCtrl.get);
module.exports = router;