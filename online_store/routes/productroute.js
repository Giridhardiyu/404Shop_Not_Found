const express = require('express');
const bookingController = require('./../controllers/productcont');
const router = express.Router();

router.route('/').get(bookingController.getAllProducts).post(bookingController.createProduct); // Updated this line

router
  .route('/:id')
  .get(bookingController.getProductById)
  .delete(bookingController.deleteProductById)
  .patch(bookingController.updateProductById);
  
  router.get('/category/:category', bookingController.getProductsByCategory);
module.exports = router;
