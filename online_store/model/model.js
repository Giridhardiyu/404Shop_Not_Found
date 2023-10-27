const mongoose = require('mongoose');

// Create a schema for the product
const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
