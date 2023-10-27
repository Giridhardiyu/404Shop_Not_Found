const Cart = require('./../model/cart');
const Product = require('./../model/model');


exports.getAllProducts = async (req, res, next) => {
    try {
      const productsInCart = await Cart.find().populate('product');
      // console.log(productsInCart.length);
      if (productsInCart.length === 0) {
        return res.status(200).json({
          status: 'success',
          data: [],
          message: 'The cart is currently empty.',
        });
      }
  
      res.status(200).json({
        status: 'success',
        data: productsInCart,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };
  
  


exports.addOrUpdate = async (req, res, next) => {
    const {productId,quantity}=req.body;
    // const =req.params.param2;
    
  try {
    let cartItem = await Cart.findOne({ product: productId });
    
    if (!cartItem) {
      // Product not in the cart, add it
      cartItem = new Cart({
        product: productId,
        quantity: quantity,
      });
    } else {
      // Product already in the cart, update the quantity
      cartItem.quantity = quantity;
    }

    const updatedCartItem = await cartItem.save();

    res.status(201).json({
      status: 'success',
      data: updatedCartItem,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
  };

  exports.deleteProduct = async (req, res, next) => {
    try {
      await Cart.findByIdAndDelete(req.params.param1);
  
      res.status(204).json({});
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  exports.getTotal = async (req, res, next) => {
    try {
      const productsInCart = await Cart.find();
  
      if (productsInCart.length === 0) {
        return res.status(200).json({
          status: 'success',
          total: 0, // Return a total of 0 when the cart is empty
        });
      }
  
      // Calculate the total price by iterating through the items and fetching the product details
      let total = 0;
      for (const item of productsInCart) {
        
        const product = await Product.findById(item.product);
        
        total += product.productPrice * item.quantity;
      }
  
      res.status(200).json({
        status: 'success',
        total,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };
  
    
  
