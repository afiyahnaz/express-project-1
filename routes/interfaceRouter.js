const express = require('express');
const interfaceCtrl = require('../controllers/interfaceCtrl');
const router = express.Router();
router.get('/interfaces', interfaceCtrl.get);
module.exports = router;