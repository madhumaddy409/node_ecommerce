const { query } = require("express");
const User = require("../models/user")
const Cart = require("../models/cart")
const Product = require("../models/products")

const {auth} = require("../middleware/auth");
const products = require("../models/products");


exports.postCart = async(req, res) => {
    const { product_id ,user_id ,quantity} = req.body;
    

    let cart = await Cart.findOne({
        product_id,user_id
      });
      if (cart)
        return res.status(400).json({
          message: "alread in cart"
          
        });
        else{
            const cart = new Cart(req.body)
            cart.save((err, cart) => {
                if(err) {
                    return res.status(400).json({
                        err: "Data not saved in DB"
                    })
                }
                res.json(cart)
                // message: "item added to cart"
            });
            
    }    
};


exports.getCart = async (req, res) => {
  const { user_id} = req.body;
 
    let cart = await Cart.find({
        user_id
      });

     console.log(cart)
     res.send(cart)
}