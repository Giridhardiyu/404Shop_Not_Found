const mongoose=require('mongoose');
const Product = require('./model');


const cartschema=new mongoose.Schema(
    {   
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
           
        },
        quantity:
        {
            type:Number,
            required:true,
        }



    }
)

const cart=mongoose.model('Cart', cartschema);
module.exports=cart;