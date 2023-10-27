const express = require('express');
const cartcont = require('./../controllers/cartcont');
const router = express.Router();

router.route('/').get(cartcont.getAllProducts);

router.route('/:param1').delete(cartcont.deleteProduct);
router.route('/').post(cartcont.addOrUpdate);
router.route('/total').get(cartcont.getTotal);

module.exports = router;