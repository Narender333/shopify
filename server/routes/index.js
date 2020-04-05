const express = require('express'),
router = express.Router();

router.use('/initialize', require('../controllers/initialize'));
router.use('/product', require('../controllers/product'));
router.use('/customer', require('../controllers/customer'));
router.use('/user', require('../controllers/user'));
router.use('/transaction', require('../controllers/transaction'));

module.exports = router;